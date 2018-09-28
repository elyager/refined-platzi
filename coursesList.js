;(function() {
  // Open all deprecated content
  $deprecated = Array.from(
    document.querySelectorAll('.ShowDeprecatedCourses span')
  ).forEach(dep => {
    dep.click()
  })

  // Get Carrers
  let $careers = document.querySelectorAll('.Career')
  $careers.forEach(career => {
    let title = career.querySelector('.Career-name').textContent
    let approved = !(career.querySelector('.Career-badge.is-Approved') === null)
    let id = career.dataset.reactid

    localStorage.setItem(
      `career-id-${career.dataset.reactid}`,
      `{
        "id": ${id},
        "title": "${title}",
        "approved": ${approved}
      }`
    )
  })
})()
