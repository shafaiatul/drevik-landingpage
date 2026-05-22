"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  FAQ_CATEGORIES,
  FAQ_ITEMS,
  type FAQCategoryFilter,
  type FAQItem,
} from "@/components/faq/faqData";

type FilterPillsProps = {
  activeCategory: FAQCategoryFilter;
  onCategoryChange: (category: FAQCategoryFilter) => void;
};

export function FilterPills({
  activeCategory,
  onCategoryChange,
}: FilterPillsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {FAQ_CATEGORIES.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-drevik-primary text-white shadow-drevik-lg"
                : "border border-drevik-border bg-white text-drevik-primary hover:bg-drevik-bg-alt/60",
            )}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}

type FAQAccordionProps = {
  activeCategory: FAQCategoryFilter;
  openItem?: string;
  onOpenChange?: (value: string) => void;
};

function FAQAccordionItem({ item }: { item: FAQItem }) {
  return (
    <Accordion.Item
      value={item.id}
      data-faq-item
      className="overflow-hidden rounded-2xl border border-drevik-border bg-white shadow-drevik-md"
    >
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 px-8 py-6 text-left">
          <div className="flex min-w-0 flex-col gap-2">
            <span className="text-xs font-medium tracking-[0.6px] text-drevik-success">
              {item.categoryLabel}
            </span>
            <span className="text-lg font-medium leading-7 text-drevik-black">
              {item.question}
            </span>
          </div>

          <ChevronDown
            className="size-6 shrink-0 text-drevik-text-muted transition-transform duration-300 group-data-[state=open]:rotate-180"
            strokeWidth={1.5}
            aria-hidden
          />
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className="faq-accordion-content overflow-hidden">
        <div className="px-8 pb-8 text-base leading-7 text-drevik-text-muted">
          {item.answer}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export function FAQAccordion({
  activeCategory,
  openItem = "",
  onOpenChange,
}: FAQAccordionProps) {
  const filteredItems =
    activeCategory === "all"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <Accordion.Root
      type="single"
      collapsible
      value={openItem}
      onValueChange={onOpenChange}
      className="flex flex-col gap-4"
    >
      {filteredItems.map((item) => (
        <FAQAccordionItem key={item.id} item={item} />
      ))}
    </Accordion.Root>
  );
}
