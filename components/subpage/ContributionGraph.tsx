"use client";

import React, { useState, useMemo } from "react";
import { GitHubActivity, GitHubDayContribution } from "@/types/portfolio";
import { githubActivity } from "@/data/githubActivity";
import { GitCommit, ArrowUpRight, Info } from "lucide-react";

interface ContributionGraphProps {
  activity?: GitHubActivity;
  className?: string;
  hideHeader?: boolean;
}

export function ContributionGraph({
  activity = githubActivity,
  className,
  hideHeader = false,
}: ContributionGraphProps) {
  const [activeCell, setActiveCell] = useState<GitHubDayContribution | null>(null);

  // Organize days into weeks (columns) of 7 days (rows 0..6: Sun..Sat)
  const { weeks, monthLabels, totalCount, activeDaysCount, dateRangeLabel } = useMemo(() => {
    const days = activity.days;
    const computedWeeks: GitHubDayContribution[][] = [];
    let currentWeek: GitHubDayContribution[] = [];

    // Group into 7-day columns
    days.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        computedWeeks.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      computedWeeks.push(currentWeek);
    }

    // Extract month labels based on the first day of each week
    const months: { label: string; weekIndex: number }[] = [];
    let lastMonth = "";

    computedWeeks.forEach((week, weekIndex) => {
      const firstDay = week[0];
      if (firstDay) {
        const dateObj = new Date(firstDay.date + "T00:00:00");
        const monthName = dateObj.toLocaleDateString("en-US", { month: "short" });
        if (monthName !== lastMonth) {
          months.push({ label: monthName, weekIndex });
          lastMonth = monthName;
        }
      }
    });

    const activeDays = days.filter((d) => d.count > 0).length;

    // Format dynamic date range label (e.g. "Sep 2025 — Sep 2026")
    let rangeLabel = "";
    if (activity.range?.from && activity.range?.to) {
      try {
        const fromD = new Date(activity.range.from + "T00:00:00");
        const toD = new Date(activity.range.to + "T00:00:00");
        const fromStr = fromD.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });
        const toStr = toD.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });
        rangeLabel = fromStr === toStr ? fromStr : `${fromStr} — ${toStr}`;
      } catch {
        rangeLabel = `${activity.range.from} — ${activity.range.to}`;
      }
    }

    return {
      weeks: computedWeeks,
      monthLabels: months,
      totalCount: activity.totalContributions,
      activeDaysCount: activeDays,
      dateRangeLabel: rangeLabel,
    };
  }, [activity]);

  // Color mapping matching the dark publication emerald/green signal (#45D6A0)
  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#18392B] hover:ring-1 hover:ring-[#45D6A0]";
      case 2:
        return "bg-[#225C43] hover:ring-1 hover:ring-[#45D6A0]";
      case 3:
        return "bg-[#2E8B62] hover:ring-1 hover:ring-[#45D6A0]";
      case 4:
        return "bg-[#45D6A0] hover:ring-1 hover:ring-[#45D6A0]";
      case 0:
      default:
        return "bg-[#12161D] hover:bg-[#1A202A]";
    }
  };

  const dayOfWeekLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

  return (
    <div
      className={`w-full space-y-4 select-none ${className || ""}`}
      aria-label="GitHub Activity Contribution Heatmap"
    >
      {!hideHeader && (
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-3 border-b border-[#242830]">
          <div className="flex items-center space-x-2 text-[11px] font-mono text-[#666B73] uppercase tracking-wider">
            <GitCommit className="w-3.5 h-3.5 text-[#45D6A0]" />
            <span className="font-semibold text-[#F4F1EA]">
              GITHUB ACTIVITY HORIZON
            </span>
            <span>·</span>
            <span className="text-[#9A9DA3]">@{activity.username}</span>
          </div>

          <div className="flex items-center space-x-3 text-[11px] font-mono text-[#666B73]">
            <span>{totalCount} CONTRIBUTIONS RECORDED</span>
            <span>·</span>
            <span>{activeDaysCount} ACTIVE DAYS</span>
          </div>
        </div>
      )}

      {/* Heatmap Layout with Seamless Dark Integrated Styling (No Box Card) */}
      <div className="relative border border-[#242830] bg-[#08090B] p-4 sm:p-6 overflow-hidden">
        {/* Subtle grid metadata */}
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#666B73] pb-4">
          <span>CADENCE · 52 WEEKS</span>
          <span>{dateRangeLabel || "LAST 12 MONTHS"}</span>
        </div>

        {/* Scrollable Container for small screens */}
        <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#242830]">
          <div className="inline-block min-w-[720px]">
            {/* Month Labels Row */}
            <div className="flex text-[10px] font-mono text-[#666B73] mb-1.5 pl-8">
              {weeks.map((_, weekIndex) => {
                const month = monthLabels.find((m) => m.weekIndex === weekIndex);
                return (
                  <div
                    key={weekIndex}
                    className="w-[12px] mr-[3px] shrink-0 text-left"
                  >
                    {month ? (
                      <span className="truncate block font-semibold text-[#9A9DA3]">
                        {month.label}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>

            {/* Grid with Day of Week Column */}
            <div className="flex">
              {/* Day Labels Column */}
              <div className="flex flex-col justify-between pr-2 text-[9px] font-mono text-[#666B73] shrink-0 w-8 select-none py-0.5">
                {dayOfWeekLabels.map((lbl, idx) => (
                  <span key={idx} className="h-[12px] leading-[12px]">
                    {lbl}
                  </span>
                ))}
              </div>

              {/* 52 Columns (Weeks) */}
              <div className="flex gap-[3px]">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px] shrink-0">
                    {week.map((day) => {
                      const isHovered = activeCell?.date === day.date;
                      return (
                        <div
                          key={day.date}
                          onMouseEnter={() => setActiveCell(day)}
                          onMouseLeave={() => setActiveCell(null)}
                          onClick={() => setActiveCell(day)}
                          className={`w-[12px] h-[12px] rounded-[1.5px] cursor-pointer transition-colors duration-150 ${getCellColor(
                            day.level
                          )} ${
                            isHovered ? "ring-2 ring-[#45D6A0] z-10 scale-125" : ""
                          }`}
                          title={`${day.date}: ${day.count} contributions`}
                          aria-label={`${day.date}: ${day.count} contributions`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Tooltip Bar & Legend */}
        <div className="mt-4 pt-3 border-t border-[#242830] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono">
          {/* Active cell readout */}
          <div className="text-[#9A9DA3] min-h-[18px] flex items-center space-x-2">
            {activeCell ? (
              <>
                <span className="font-semibold text-[#45D6A0]">
                  {activeCell.count} contribution{activeCell.count !== 1 ? "s" : ""}
                </span>
                <span className="text-[#666B73]">on</span>
                <span className="text-[#F4F1EA]">{activeCell.date}</span>
              </>
            ) : (
              <span className="text-[#666B73]">
                Hover or tap any node to inspect daily contribution counts
              </span>
            )}
          </div>

          {/* Activity Level Legend */}
          <div className="flex items-center space-x-2 text-[10px] text-[#666B73]">
            <span>LESS</span>
            <div className="flex space-x-1">
              <span className="w-2.5 h-2.5 rounded-[1.5px] bg-[#12161D]" />
              <span className="w-2.5 h-2.5 rounded-[1.5px] bg-[#18392B]" />
              <span className="w-2.5 h-2.5 rounded-[1.5px] bg-[#225C43]" />
              <span className="w-2.5 h-2.5 rounded-[1.5px] bg-[#2E8B62]" />
              <span className="w-2.5 h-2.5 rounded-[1.5px] bg-[#45D6A0]" />
            </div>
            <span>MORE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
