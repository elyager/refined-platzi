(function(){

  let $messageElement = document.querySelector('#course-duration')
  let $topBanner = document.querySelector('.CourseBanner')

  if ($messageElement) {
    $topBanner.removeChild($messageElement)
    return
  }

  let $contentDuration = document.querySelectorAll('.MaterialContent-duration')
  let totalMinutes = Number(0)

  $contentDuration.forEach( (item) => {
    let minutes = parseInt(item.innerText, 10) || 0    
    totalMinutes += minutes      
  })

  let totalHours = Math.floor(totalMinutes / 60)    
  let remainingMinutes = totalMinutes % 60
  let message = `Duración Total: ${totalHours} horas con ${remainingMinutes} minutos`
  
  let spanElement = document.createElement('span')
  spanElement.style.color = '#2295cf'
  spanElement.id = 'course-duration'
  spanElement.textContent = message
  
  $topBanner.appendChild(spanElement)

})()
