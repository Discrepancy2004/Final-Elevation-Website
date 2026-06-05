import { cn } from "@/lib/utils"
import {
  ArrowRight,
  CheckCircle2,
  GitCommit,
  Hammer,
  FlaskConical,
  Rocket,
} from "lucide-react"

const STAGES = [
  {
    label: "Commit",
    sublabel: "Source control",
    icon: GitCommit,
  },
  {
    label: "Build",
    sublabel: "Compile & package",
    icon: Hammer,
  },
  {
    label: "Test",
    sublabel: "Automated QA",
    icon: FlaskConical,
    highlight: true,
  },
  {
    label: "Report",
    sublabel: "Coverage & results",
    icon: CheckCircle2,
  },
  {
    label: "Deploy",
    sublabel: "Release to env",
    icon: Rocket,
  },
]

function StageNode({
  label,
  sublabel,
  icon: Icon,
  highlight,
}: (typeof STAGES)[number]) {
  return (
    <div
      className={cn(
        "flex min-w-[5.5rem] flex-col items-center rounded-xl border px-3 py-3 text-center sm:min-w-[6.5rem] sm:px-4 sm:py-4",
        highlight
          ? "border-emerald-400 bg-emerald-50 shadow-sm shadow-emerald-200/60"
          : "border-emerald-200/80 bg-white"
      )}
    >
      <div
        className={cn(
          "mb-2 flex h-9 w-9 items-center justify-center rounded-lg",
          highlight ? "bg-emerald-600 text-white" : "bg-emerald-100 text-emerald-800"
        )}
      >
        <Icon className='h-4 w-4' strokeWidth={2} />
      </div>
      <p
        className={cn(
          "text-xs font-bold uppercase tracking-wide sm:text-sm",
          highlight ? "text-emerald-900" : "text-neutral-900"
        )}
      >
        {label}
      </p>
      <p className='mt-0.5 text-[10px] leading-tight text-neutral-500 sm:text-xs'>
        {sublabel}
      </p>
    </div>
  )
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <ArrowRight
      className={cn("h-4 w-4 shrink-0 text-emerald-500 sm:h-5 sm:w-5", className)}
      strokeWidth={2.5}
      aria-hidden
    />
  )
}

export function PipelineFlowDiagram({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[320px] flex-col justify-center bg-gradient-to-br from-neutral-50 via-white to-emerald-50/40 p-6 md:h-[420px] md:p-8",
        className
      )}
      role='img'
      aria-label='CI/CD pipeline flow: Commit, Build, Test, Report, Deploy'
    >
      {/* Desktop: horizontal flow */}
      <div className='hidden items-center justify-center gap-2 lg:flex lg:gap-3'>
        {STAGES.map((stage, idx) => (
          <div key={stage.label} className='flex items-center gap-2 lg:gap-3'>
            <StageNode {...stage} />
            {idx < STAGES.length - 1 && <FlowArrow />}
          </div>
        ))}
      </div>

      {/* Tablet: wrapped two-row flow */}
      <div className='hidden flex-col items-center gap-4 sm:flex lg:hidden'>
        <div className='flex items-center gap-2'>
          {STAGES.slice(0, 3).map((stage, idx) => (
            <div key={stage.label} className='flex items-center gap-2'>
              <StageNode {...stage} />
              {idx < 2 && <FlowArrow />}
            </div>
          ))}
        </div>
        <div className='h-6 w-px bg-emerald-300' aria-hidden />
        <div className='flex items-center gap-2'>
          <StageNode {...STAGES[3]} />
          <FlowArrow />
          <StageNode {...STAGES[4]} />
        </div>
      </div>

      {/* Mobile: vertical flow */}
      <div className='flex flex-col items-center gap-2 sm:hidden'>
        {STAGES.map((stage, idx) => (
          <div key={stage.label} className='flex flex-col items-center gap-2'>
            <StageNode {...stage} />
            {idx < STAGES.length - 1 && (
              <ArrowRight
                className='h-4 w-4 rotate-90 text-emerald-500'
                strokeWidth={2.5}
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>

      {/* Pipeline track decoration */}
      <div className='pointer-events-none mt-8 hidden lg:block'>
        <div className='mx-auto flex max-w-md items-center gap-2'>
          <span className='h-1.5 flex-1 rounded-full bg-emerald-200' />
          <span className='rounded-full bg-emerald-700 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white'>
            Continuous testing
          </span>
          <span className='h-1.5 flex-1 rounded-full bg-emerald-200' />
        </div>
      </div>
    </div>
  )
}
