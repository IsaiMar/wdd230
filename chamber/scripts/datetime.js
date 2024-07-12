      // create a function to update the date and time
      function updateDateTime() {
        // create a new `Date` object
        const now = new Date();

        // const time = padNumber(now.getHours(),2)+':'+padNumber(now.getMinutes(),2)
        // get the current date and time as a string
    
        const currentDateTime = now.toLocaleString();

        // update the `textContent` property of the `span` element with the `id` of `datetime`
        document.querySelector('#datetime').textContent = currentDateTime;
      }

      // call the `` function every second
      setInterval(updateDateTime, 1000);