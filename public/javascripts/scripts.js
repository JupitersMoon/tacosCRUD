$().ready(() => {
  $('.delete').click(() => {
    let id = $(event.target).attr('data-id');
    $.ajax({
      method: 'DELETE',
      url: '/tacos',
      data: {
        id: id
      },
      success: (data) => {
        if (data) {
          location.reload();
        }
      },
      error: () => {}
    })
  })
})
