/**
 *
 * @param {number} start A numerical value to start at
 * @param {number} end A numerical value to stop at
 * @param {number} step How much to go up by each step
 * @param {number} frequency Step frequency in milliseconds
 * @param {(currentValue: number) => any} onStep Action to take on each step
 */
export const animate = async (start, end, step, frequency, onStep) => {
  // type validation
  if (start.constructor.name != "Number")
    throw new Error(`invalid type ${start.constructor.name} for start:`);
  if (end.constructor.name != "Number")
    throw new Error(`invalid type ${end.constructor.name} for end`);
  if (step.constructor.name != "Number")
    throw new Error(`invalid type ${step.constructor.name} for step`);
  if (frequency.constructor.name != "Number")
    throw new Error(`invalid type ${frequency.constructor.name} for frequency`);

  // this validation will prevent this from creating a memory leak or an infinite loop of any kind
  if (start == end) throw new Error(`start and end must be different`);
  if (step == 0) throw new Error(`step cannot be 0`);
  if (end > start && step < 0)
    throw new Error(
      `if the end value is greater than the start value, the step must be positive`
    );
  if (start > end && step > 0)
    throw new Error(
      `if the start value is greater than the end value, the step must be negative`
    );
  if (frequency < 1) throw new Error(`frequency must be at least 1`);

  await new Promise((res) => {
    let currentStep = start;
    const interval = setInterval(() => {
      if (
        (currentStep >= end && end > start) ||
        (currentStep <= end && start > end)
      ) {
        res(true);
        clearInterval(interval);
        return;
      }
      currentStep = currentStep + step;
      onStep(currentStep);
    }, frequency);
  });
};
