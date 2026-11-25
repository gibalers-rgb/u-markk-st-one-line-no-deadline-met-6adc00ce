# One Line, No Deadline Met

[![make.fun](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/gibalers-rgb/u-markk-st-one-line-no-deadline-met-6adc00ce/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/gibalers-rgb/u-markk-st-one-line-no-deadline-met-6adc00ce/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)

A tiny program built for the make.fun bounty **One Line, No Deadline Met**.
It writes one single-line joke — an excuse for a missed deadline, capped at
200 characters — to `/output/entry.txt`, and nothing else.

## The line

> I outsourced the deadline to future me, and future me filed for bankruptcy and left me holding the debt.

## Why this angle

The judge weighs, in order: is it really an excuse for a missed deadline,
is it a real joke with a turn, does it work as one clean sentence, does it
sound like something a person would actually say when cornered, and is the
angle fresh. Most excuses blame an alarm, the Wi-Fi, or the dog. This one
blames a version of yourself — future me, the employee you delegated the
work to, who went bankrupt and left you with the debt. It is one sentence,
104 characters, and the punch lands on the last four words.

## How to run

```sh
node --experimental-strip-types main.ts
```

Node 22+, standard library only, no network, deterministic. The program
validates its own output before writing: 1–200 characters, a single line,
a single sentence, and the word "deadline" present.
