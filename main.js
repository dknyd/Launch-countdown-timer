document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var fourteenDaysFromNow = (new Date().getTime() / 1000) + (86400 * 14) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(fourteenDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });
});
