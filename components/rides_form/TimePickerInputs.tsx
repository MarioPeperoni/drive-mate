"use client";

import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import React from "react";
import {
  TimePickerType,
  getArrowByType,
  getDateByType,
  setDateByType,
} from "@/lib/TimePickerUtils";

export interface TimePickerInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  picker: TimePickerType;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  onRightFocus?: () => void;
  onLeftFocus?: () => void;
}

/**
 * A custom input component for selecting time in a picker.
 *
 * @component
 * @example
 * ```tsx
 * <TimePickerInput
 *   className="my-input"
 *   value={selectedTime}
 *   id="time-input"
 *   name="time"
 *   date={selectedDate}
 *   setDate={setSelectedDate}
 *   onChange={handleTimeChange}
 *   onKeyDown={handleKeyDown}
 *   picker="hour"
 *   onLeftFocus={handleLeftFocus}
 *   onRightFocus={handleRightFocus}
 * />
 * ```
 *
 * @param className - The CSS class name for the input element.
 * @param type - The type of the input element. Default is "tel".
 * @param value - The value of the input element.
 * @param id - The id attribute of the input element.
 * @param name - The name attribute of the input element.
 * @param date - The selected date object.
 * @param setDate - A function to update the selected date.
 * @param onChange - A function to handle the change event of the input element.
 * @param onKeyDown - A function to handle the keydown event of the input element.
 * @param picker - The type of picker to display (e.g., "hour", "minute").
 * @param onLeftFocus - A function to handle the focus event when moving left.
 * @param onRightFocus - A function to handle the focus event when moving right.
 * @param props - Additional props to be spread to the input element.
 * @returns The rendered TimePickerInput component.
 */
const TimePickerInput = React.forwardRef<
  HTMLInputElement,
  TimePickerInputProps
>(
  (
    {
      className,
      type = "tel",
      value,
      id,
      name,
      date = new Date(new Date().setHours(0, 0, 0, 0)),
      setDate,
      onChange,
      onKeyDown,
      picker,
      onLeftFocus,
      onRightFocus,
      ...props
    },
    ref,
  ) => {
    const [flag, setFlag] = React.useState<boolean>(false);

    /**
     * allow the user to enter the second digit within 2 seconds
     * otherwise start again with entering first digit
     */
    React.useEffect(() => {
      if (flag) {
        const timer = setTimeout(() => {
          setFlag(false);
        }, 2000);

        return () => clearTimeout(timer);
      }
    }, [flag]);

    const calculatedValue = React.useMemo(
      () => getDateByType(date, picker),
      [date, picker],
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Tab") return;
      e.preventDefault();
      if (e.key === "ArrowRight") onRightFocus?.();
      if (e.key === "ArrowLeft") onLeftFocus?.();
      if (["ArrowUp", "ArrowDown"].includes(e.key)) {
        const step = e.key === "ArrowUp" ? 1 : -1;
        const newValue = getArrowByType(calculatedValue, step, picker);
        if (flag) setFlag(false);
        const tempDate = new Date(date);
        setDate(setDateByType(tempDate, newValue, picker));
      }
      if (e.key >= "0" && e.key <= "9") {
        const newValue = !flag
          ? "0" + e.key
          : calculatedValue.slice(1, 2) + e.key;
        if (flag) onRightFocus?.();
        setFlag((prev) => !prev);
        const tempDate = new Date(date);
        setDate(setDateByType(tempDate, newValue, picker));
      }
    };

    return (
      <Input
        ref={ref}
        id={id || picker}
        name={name || picker}
        className={cn(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          className,
        )}
        value={value || calculatedValue}
        onChange={(e) => {
          e.preventDefault();
          onChange?.(e);
        }}
        type={type}
        inputMode="decimal"
        onKeyDown={(e) => {
          onKeyDown?.(e);
          handleKeyDown(e);
        }}
        {...props}
      />
    );
  },
);

TimePickerInput.displayName = "TimePickerInput";

export { TimePickerInput };
