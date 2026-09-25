"use client";

import React, { useState, useMemo } from "react";
import { GitHubActivity, GitHubDayContribution } from "@/types/portfolio";
import { githubActivity } from "@/data/githubActivity";
import { GitCommit, ArrowUpRight } from "lucide-react";

interface ContributionGraphProps {
  activity?: GitHubActivity;
}

export function ContributionGraph({
  activity = githubActivity,
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

  // Color mapping matching the warm editorial palette
  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#D1CCC0] hover:ring-1 hover:ring-ink";
      case 2:
        return "bg-[#9E9A91] hover:ring-1 hover:ring-ink";
      case 3:
        return "bg-[#57544F] hover:ring-1 hover:ring-ink";
      case 4:
        return "bg-[#111111] hover:ring-1 hover:ring-ink";
      case 0:
      default:
        return "bg-[#EAE6DF]/80 hover:bg-[#DCD7CE]";
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr + "T00:00:00");
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section
      aria-label="GitHub annual contribution activity"
      className="p-5 sm:p-7 rounded-xl border border-border-subtle bg-canvas-subtle/40 flex flex-col space-y-5 select-none"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-border-subtle/60 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
            <GitCommit className="w-3.5 h-3.5 text-ink" />
            <span>GITHUB ACTIVITY · @{activity.username}</span>
          </div>
          <div className="text-[19px] sm:text-[22px] font-semibold text-ink tracking-tight mt-1">
            {totalCount} Contributions{dateRangeLabel ? ` · ${dateRangeLabel}` : ""}
          </div>
        </div>

        <div className="text-[11px] font-mono text-ink-muted flex items-center space-x-3">
          <span>{activeDaysCount} active days</span>
          <span>·</span>
          <a
            href={`https://github.com/${activity.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors inline-flex items-center space-x-1 group"
          >
            <span>github.com/{activity.username}</span>
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Text summary for accessibility & guaranteed clarity */}
      <p className="sr-only">
        {totalCount} public contributions across {activeDaysCount} active days on GitHub
        for user {activity.username} from {activity.range.from} to {activity.range.to}.
      </p>

      {/* Horizontally scrollable calendar container on small screens */}
      <div className="relative w-full overflow-x-auto pb-2 pt-1 -mx-2 px-2 sm:mx-0 sm:px-0">
        <div className="min-w-[690px] flex flex-col space-y-2">
          {/* Month labels header row */}
          <div className="flex text-[10px] font-mono uppercase text-ink-subtle pl-7">
            {monthLabels.map((m, idx) => (
              <span
                key={idx}
                style={{
                  width: `${(weeks.length / monthLabels.length) * 12.8}px`,
                }}
                className="shrink-0 text-left"
              >
                {m.label}
              </span>
            ))}
          </div>

          {/* Grid of days (weeks as columns, 7 rows: Sun..Sat) */}
          <div className="flex items-start space-x-1.5">
            {/* Day of week labels on left */}
            <div className="flex flex-col space-y-[3px] text-[9px] font-mono text-ink-subtle/80 pr-1.5 pt-[1px]">
              <span className="h-[10px] leading-[10px]"></span>
              <span className="h-[10px] leading-[10px]">Mon</span>
              <span className="h-[10px] leading-[10px]"></span>
              <span className="h-[10px] leading-[10px]">Wed</span>
              <span className="h-[10px] leading-[10px]"></span>
              <span className="h-[10px] leading-[10px]">Fri</span>
              <span className="h-[10px] leading-[10px]"></span>
            </div>

            {/* Weeks columns */}
            <div className="flex space-x-[3px]">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col space-y-[3px]">
                  {week.map((day) => {
                    const labelText =
                      day.count === 0
                        ? `No contributions on ${formatDate(day.date)}`
                        : `${day.count} ${
                            day.count === 1 ? "contribution" : "contributions"
                          } on ${formatDate(day.date)}`;

                    const isHovered = activeCell?.date === day.date;

                    return (
                      <button
                        type="button"
                        key={day.date}
                        aria-label={labelText}
                        onMouseEnter={() => setActiveCell(day)}
                        onMouseLeave={() => setActiveCell(null)}
                        onFocus={() => setActiveCell(day)}
                        onBlur={() => setActiveCell(null)}
                        className={`w-[10px] h-[10px] rounded-[2px] transition-transform duration-100 ${getCellColor(
                          day.level
                        )} ${isHovered ? "scale-125 z-10" : ""}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar: active inspection tooltip & legend */}
      <div className="pt-2 border-t border-border-subtle/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] font-mono text-ink-subtle">
        {/* Dynamic Cell Inspector Tooltip */}
        <div className="min-h-[18px] text-ink">
          {activeCell ? (
            <span>
              <strong className="font-semibold">
                {activeCell.count === 0 ? "No" : activeCell.count}{" "}
                {activeCell.count === 1 ? "contribution" : "contributions"}
              </strong>{" "}
              on {formatDate(activeCell.date)}
            </span>
          ) : (
            <span className="text-ink-subtle">
              Hover or focus any date to inspect daily output
            </span>
          )}
        </div>

        {/* Editorial Legend */}
        <div className="flex items-center space-x-2 shrink-0">
          <span>Less</span>
          <div className="flex space-x-1 items-center">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#EAE6DF]/80 border border-border-subtle/50" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#D1CCC0]" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#9E9A91]" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#57544F]" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#111111]" />
          </div>
          <span>More</span>
        </div>
      </div>
    </section>
  );
}
