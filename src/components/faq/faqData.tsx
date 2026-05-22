import type { ReactNode } from "react";

export type FAQCategory =
  | "smart-daily-coaching"
  | "train-safe"
  | "progress-that-lasts"
  | "your-plan-your-way"
  | "body-weight"
  | "break-sessions";

export type FAQCategoryFilter = "all" | FAQCategory;

export type FAQItem = {
  id: string;
  category: FAQCategory;
  categoryLabel: string;
  question: string;
  answer: ReactNode;
};

export const FAQ_CATEGORIES: {
  id: FAQCategoryFilter;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "smart-daily-coaching", label: "Smart daily coaching" },
  { id: "train-safe", label: "Train safe" },
  { id: "progress-that-lasts", label: "Progress that lasts" },
  { id: "your-plan-your-way", label: "Your plan, your way" },
  { id: "body-weight", label: "Body weight" },
  { id: "break-sessions", label: "Break Sessions" },
];

function Answer({ children }: { children: ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "readiness-signal",
    category: "smart-daily-coaching",
    categoryLabel: "Smart daily coaching",
    question:
      "How does Drevik know if I should push hard or take it easy today?",
    answer: (
      <Answer>
        <P>
          Every day before your workout, the <strong>Today</strong> tab asks
          three quick questions:
        </P>
        <List
          items={[
            <>
              <strong>Sleep quality</strong> — good / ok / bad
            </>,
            <>
              <strong>Soreness</strong> — 0–10 scale
            </>,
            <>
              <strong>Joint pain</strong> — none / mild / sharp
            </>,
          ]}
        />
        <P>
          If you report mild or sharp pain, you also select{" "}
          <strong>where it hurts</strong> (shoulder, elbow, knee, low back,
          wrist, or hip).
        </P>
        <P>
          Drevik turns your answers into a readiness score (0–6) and a traffic
          light:
        </P>
        <List
          items={[
            <>
              <strong>GREEN (5–6)</strong> — You&apos;re recovered. Push harder
              — go heavier or add reps.
            </>,
            <>
              <strong>YELLOW (3–4)</strong> — Take it steady. Same weight,
              controlled effort.
            </>,
            <>
              <strong>RED (0–2, or sharp pain)</strong> — Protect mode. Reduce
              stress, train gently, or rest.
            </>,
          ]}
        />
        <P>
          <strong>Sharp pain always forces RED</strong>, regardless of sleep and
          soreness. When everything looks good, your score hits 6/6 and you see
          &quot;You&apos;re feeling great&quot; with a <strong>GO HARD</strong>{" "}
          call to action.
        </P>
      </Answer>
    ),
  },
  {
    id: "joint-pain-readiness",
    category: "smart-daily-coaching",
    categoryLabel: "Smart daily coaching",
    question:
      "What happens if I report joint pain during my readiness check?",
    answer: (
      <Answer>
        <P>
          Drevik activates <strong>joint protection</strong> before your
          workout is built:
        </P>
        <List
          items={[
            <>
              <strong>Sharp pain + area selected:</strong> Every exercise with
              any stress on that joint is removed from today&apos;s session. Your
              signal is RED.
            </>,
            <>
              <strong>Mild pain + area selected:</strong> Exercises with
              moderate-to-high stress on that joint are excluded. Your overall
              signal may still be YELLOW depending on sleep and soreness.
            </>,
          ]}
        />
        <P>
          This works on top of chronic pain flags you set during onboarding or
          in <strong>Settings</strong>, so both old injuries and new flare-ups
          are covered.
        </P>
      </Answer>
    ),
  },
  {
    id: "rest-recommendation",
    category: "smart-daily-coaching",
    categoryLabel: "Smart daily coaching",
    question: "Does Drevik ever tell me NOT to work out?",
    answer: (
      <Answer>
        <P>
          Yes. If your readiness signal is <strong>RED</strong> and you
          haven&apos;t selected a specific pain area, Drevik recommends{" "}
          <strong>resting today</strong>. You can still choose to train, but the
          app applies stricter safety rails: recovery-focused messaging, reduced
          volume caps, and no grinding through failure on a red day.
        </P>
        <P>
          When sharp pain includes a joint area, Today offers{" "}
          <strong>&quot;Start protected workout&quot;</strong> (Train with
          exclusions) or <strong>&quot;Take the day off&quot;</strong> (Breaks /
          recovery).
        </P>
      </Answer>
    ),
  },
  {
    id: "today-to-train",
    category: "smart-daily-coaching",
    categoryLabel: "Smart daily coaching",
    question: "How does the Today tab connect to my actual workout?",
    answer: (
      <Answer>
        <List
          items={[
            <>You complete readiness on Today.</>,
            <>The result is saved and shown as your traffic light badge.</>,
            <>
              <strong>Train</strong> stays locked until today&apos;s check-in is
              done.
            </>,
            <>
              When you start a session, Drevik uses your readiness signal for
              coaching copy and your pain inputs for which exercises are
              allowed — not just how hard the banner says to go.
            </>,
          ]}
        />
        <P>
          Exercise safety is driven by <strong>pain area stress thresholds</strong>.
          The traffic light drives <strong>effort guidance</strong> (push vs
          maintain vs protect).
        </P>
      </Answer>
    ),
  },
  {
    id: "form-joint-pain",
    category: "train-safe",
    categoryLabel: "Train safe",
    question:
      'What do "Form broke" and "Joint pain" do when I log a set?',
    answer: (
      <Answer>
        <P>
          These are <strong>real safety signals</strong>, not decorative labels.
          They are saved to your workout history and change what Drevik
          recommends next.
        </P>
        <P>
          <strong>Form broke</strong>
        </P>
        <List
          items={[
            <>
              <strong>First time on an exercise:</strong> Drevik tells you to
              reduce the next set by about 5–10% or stop pushing reps if form is
              breaking down.
            </>,
            <>
              <strong>Second time on the same exercise:</strong> Drevik stops
              that exercise for today.
            </>,
            <>
              <strong>Future sessions:</strong> Progression holds until you log
              clean reps again — no load increase through sloppy form.
            </>,
          ]}
        />
        <P>
          <strong>Joint pain</strong>
        </P>
        <List
          items={[
            <>Drevik stops the exercise immediately for the rest of the session.</>,
            <>
              It looks for a safer swap from that exercise&apos;s swap ladder —
              same pattern, less joint stress, equipment you actually have.
            </>,
            <>
              It applies a <strong>7-day pattern lock</strong>: that movement
              pattern stays in protect mode (lighter loads, no failure, supported
              variants preferred).
            </>,
            <>Your next recommended weight drops by about 10–15%.</>,
          ]}
        />
      </Answer>
    ),
  },
  {
    id: "weight-progression",
    category: "progress-that-lasts",
    categoryLabel: "Progress that lasts",
    question: "How does Drevik decide when to increase my weight?",
    answer: (
      <Answer>
        <P>
          Drevik uses <strong>double progression</strong> — a proven, sustainable
          method:
        </P>
        <List
          items={[
            <>
              <strong>Build reps first</strong> at the same weight until you
              reach the top of your rep range (for example, 12 reps in an 8–12
              range).
            </>,
            <>
              <strong>Then increase load</strong> by roughly 2.5–5% and reset
              reps to the bottom of the range — but only if the set was clean
              (no form break, no joint pain).
            </>,
            <>
              <strong>Never progress through bad reps.</strong> Form breaks and
              pain flags block increases even if the numbers look strong.
            </>,
          ]}
        />
        <P>
          Your <strong>Coach Target</strong> card shows this in plain language,
          with a proof line tied to your last logged set — for example:
        </P>
        <List
          items={[
            <>&quot;Clean 185 lb × 10 — aim for 11 reps at the same weight.&quot;</>,
            <>
              &quot;Hit 185 lb × 12 at the top of your range — next: 195 lb ×
              8.&quot;
            </>,
            <>
              &quot;Form broke at 185 lb × 9 — holding weight until reps are
              clean again.&quot;
            </>,
          ]}
        />
      </Answer>
    ),
  },
  {
    id: "auto-prs",
    category: "progress-that-lasts",
    categoryLabel: "Progress that lasts",
    question: "Does Drevik automatically detect personal records?",
    answer: (
      <Answer>
        <P>
          Yes. After you log a working set, Drevik checks your full history for
          that exercise and can recognize:
        </P>
        <List
          items={[
            <>
              <strong>Weight PR</strong> — heaviest load logged
            </>,
            <>
              <strong>Rep PR</strong> — most reps at that weight
            </>,
            <>
              <strong>Volume PR</strong> — best weight × reps on one set
            </>,
            <>
              <strong>Estimated strength PR</strong> — estimated 1-rep max
              (Epley formula) improved
            </>,
          ]}
        />
        <P>
          PRs are only awarded on <strong>clean sets</strong>. If you flagged
          form broke or joint pain, that set won&apos;t count as a record — so
          your PRs stay honest.
        </P>
        <P>
          You no longer tap a manual &quot;PR set&quot; button. Max-effort sets
          are inferred from your data; harder sets can also trigger a longer
          max-effort rest suggestion (about 5 minutes vs 3 for normal working
          sets).
        </P>
      </Answer>
    ),
  },
  {
    id: "coaching-evidence",
    category: "progress-that-lasts",
    categoryLabel: "Progress that lasts",
    question: 'What is "Coaching evidence" in exercise analytics?',
    answer: (
      <Answer>
        <P>
          For each strength exercise, analytics summarizes{" "}
          <strong>why</strong> Drevik is coaching you a certain way:
        </P>
        <List
          items={[
            <>
              <strong>Clean streak</strong> — consecutive working sets without
              form or pain flags
            </>,
            <>
              <strong>Form broke count</strong> — how often form has broken down
              on this lift
            </>,
            <>
              <strong>Joint pain count</strong> — pain events logged over time
            </>,
            <>
              <strong>Estimated strength trend</strong> — estimated 1RM
              direction vs your prior best
            </>,
          ]}
        />
        <P>
          This is derived from your logged sets, not generic motivational copy.
        </P>
      </Answer>
    ),
  },
  {
    id: "plateau-detective",
    category: "progress-that-lasts",
    categoryLabel: "Progress that lasts",
    question: "What if I stop making progress on an exercise?",
    answer: (
      <Answer>
        <P>
          Drevik&apos;s <strong>Plateau Detective</strong> runs weekly. If an
          exercise hasn&apos;t improved across <strong>3 exposures</strong>, you
          get one clear action — never a pile of changes:
        </P>
        <List
          items={[
            <>
              <strong>Pain events</strong> → swap to a safer exercise variant
            </>,
            <>
              <strong>Fatigue trend</strong> (too many red days or declining
              performance) → deload week
            </>,
            <>
              <strong>Otherwise</strong> → add one set to the stalled muscle
              (minimal extra dose)
            </>,
          ]}
        />
      </Answer>
    ),
  },
  {
    id: "deload-week",
    category: "progress-that-lasts",
    categoryLabel: "Progress that lasts",
    question: "How does a deload week work?",
    answer: (
      <Answer>
        <P>
          A deload is <strong>active recovery</strong>, not a vacation:
        </P>
        <List
          items={[
            <>Sets cut by about 50%</>,
            <>Load reduced by about 10%</>,
            <>No training to failure</>,
            <>Technique focus</>,
          ]}
        />
        <P>
          Deloads are suggested when fatigue trends are high, or when you need
          a planned reset.
        </P>
      </Answer>
    ),
  },
  {
    id: "initial-plan",
    category: "your-plan-your-way",
    categoryLabel: "Your plan, your way",
    question: "How does Drevik build my initial workout plan?",
    answer: (
      <Answer>
        <P>
          During onboarding (about 60–90 seconds), Drevik learns your goal,
          session length, days per week, equipment, units, joints to protect, and
          body weight.
        </P>
        <P>From that, Drevik assigns a template:</P>
        <List
          items={[
            <>
              <strong>2 days/week</strong> — Full Body Day A &amp; B
            </>,
            <>
              <strong>3 days/week</strong> — Full Body Day A, B &amp; C
            </>,
            <>
              <strong>4 days/week</strong> — Upper / Lower split
            </>,
          ]}
        />
        <P>
          Each training day is a list of movement slots (push, pull, squat,
          hinge, etc.). For each slot, Drevik picks the first exercise that
          matches your equipment, respects pain flags and pattern locks, and has
          enough coaching cues. Sessions are capped at <strong>6 exercises</strong>.
        </P>
      </Answer>
    ),
  },
  {
    id: "custom-split",
    category: "your-plan-your-way",
    categoryLabel: "Your plan, your way",
    question: "Can I build my own custom split?",
    answer: (
      <Answer>
        <P>
          Yes. From the <strong>Library</strong> tab:
        </P>
        <List
          items={[
            <>
              Tap <strong>+</strong> → <strong>Add Custom SPLIT</strong> (or open
              an existing split from the carousel).
            </>,
            <>Name your split, optionally add a cover photo and description.</>,
            <>
              <strong>Add sessions</strong> and choose muscle groups per session
              (Chest, Back, Quads, etc.).
            </>,
            <>Optionally add cardio activities to a session.</>,
            <>
              Reorder sessions, set which session is next, and tap{" "}
              <strong>Select</strong> to use the split on Train.
            </>,
          ]}
        />
        <P>
          When you build a custom split, you pick <strong>muscle targets</strong>,
          not individual exercises. Drevik auto-generates the exercise list when
          you start that session — using your equipment, pain flags, rotation
          history, and session caps.
        </P>
      </Answer>
    ),
  },
  {
    id: "library-browse",
    category: "your-plan-your-way",
    categoryLabel: "Your plan, your way",
    question: "How do I browse exercises in the Library?",
    answer: (
      <Answer>
        <P>The Library tab is your exercise catalog:</P>
        <List
          items={[
            <>
              <strong>Browse by muscle</strong> — tap a muscle card to see every
              exercise for that area, filter by sub-muscle or equipment, and open
              full details.
            </>,
            <>
              <strong>Browse by compound pattern</strong> — Squat, Hinge, Push,
              Pull, Press, Row, Carry.
            </>,
            <>
              <strong>My List</strong> — heart-save favorites for quick access
              later.
            </>,
            <>
              <strong>Custom splits</strong> — create and manage your own
              multi-day programs.
            </>,
          ]}
        />
        <P>
          Browsing the library is great for discovery and saving favorites.
          Custom split sessions are built from muscle group selections; at
          workout time you can still swap exercises using the same library
          filters.
        </P>
      </Answer>
    ),
  },
  {
    id: "my-list",
    category: "your-plan-your-way",
    categoryLabel: "Your plan, your way",
    question: 'What is "My List"?',
    answer: (
      <Answer>
        <P>
          <strong>My List</strong> stores exercises you love. Tap the heart on
          any exercise to save it. Saved exercises appear in one place so you
          can find them fast — useful when exploring the library or planning what
          you want to train.
        </P>
      </Answer>
    ),
  },
  {
    id: "body-weight-math",
    category: "body-weight",
    categoryLabel: "Body weight",
    question: "Why does body weight matter during workouts?",
    answer: (
      <Answer>
        <P>
          Drevik collects your <strong>body weight</strong> during onboarding
          and in Settings (Measurements) so it can calculate the actual load you
          move on certain exercises.
        </P>
        <P>
          For <strong>assisted machines</strong> (e.g. assisted pull-up/dip
          stacks) and <strong>weighted belt</strong> movements, the number on
          the machine or belt is not always the full story. Drevik uses your
          body weight to compute effective load:
        </P>
        <List
          items={[
            <>
              <strong>Assisted stack:</strong> Effective load ≈ body weight minus
              assistance selected.
            </>,
            <>
              <strong>Weighted belt:</strong> Effective load ≈ body weight plus
              added weight.
            </>,
          ]}
        />
        <P>
          That way your logged sets, progression, and PR detection reflect what
          you actually lifted — not just what the pin or belt display says.
        </P>
      </Answer>
    ),
  },
  {
    id: "break-sessions",
    category: "break-sessions",
    categoryLabel: "Break Sessions",
    question: "What are Break Sessions?",
    answer: (
      <Answer>
        <P>
          <strong>Break Sessions</strong> are 10–15 minute movement snacks for
          desk days — guided timers with short cues, not a full gym session.
          Filter by:
        </P>
        <List
          items={[
            <>Back-friendly</>,
            <>Knee-friendly</>,
            <>Shoulder-friendly</>,
            <>No equipment</>,
          ]}
        />
        <P>
          They&apos;re ideal when Today says protect or rest but you still want
          to move.
        </P>
      </Answer>
    ),
  },
];
