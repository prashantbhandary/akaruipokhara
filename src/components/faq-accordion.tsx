"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="flex flex-col gap-3"
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={item.question}
          value={`item-${index}`}
          className="rounded-2xl border border-[var(--border)] bg-white"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-[var(--brand-ink)]"
              )}
            >
              {item.question}
              <ChevronDown size={18} className="text-[var(--brand-red)]" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-5 pb-4 text-sm text-[var(--brand-slate)]">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
