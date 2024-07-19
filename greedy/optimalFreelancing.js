function optimalFreelancing(jobs) {
  let earnings = 0;
  let dayOfWork = 7;
  let completedJobs = new WeakSet();

  while (dayOfWork > 0) {
    earnings += findBestJobPaymentForDay(jobs, dayOfWork--, completedJobs);
  }
  
  return earnings;
}

function findBestJobPaymentForDay(jobs, dayNumber, completedJobs) {
  let bestJob = null;

  jobs.forEach((job) => {
    const {payment, deadline} = job;
    if (
      !completedJobs.has(job) &&
      deadline >= dayNumber &&
      payment > (bestJob?.payment ?? 0)
    ) {
      bestJob = job;
    }
  })

  bestJob && completedJobs.add(bestJob);
  return bestJob?.payment ?? 0;
}
