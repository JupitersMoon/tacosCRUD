$().ready(()=> {
  $('.delete').click(() => {
    let id = $(event.target).attr('data-id');
    console.log(id);
    $.ajax({
      method: 'DELETE',
      url: '/tacos',
      data: {id: id},
      success: () => {},
      error: () => {}
    })
  })



})
