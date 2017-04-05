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
  $('.update').click(() => {
    let id = $(event.target).attr('data-id');
    let uBox = $(`.uBox${id}`)[0];
    let form = $(`
      <label>Taco Name: <input type="text" class="name${id}"></label><br>
      <label>Taco Picture URL: <input type="text" class="picture${id}"></label><br>
      <label>Taco Description: <input type="text" class="description${id}"></label><br>
      <input type="submit" class="uSub" data-id="${id}">`);
    $(uBox).children().remove();
    $(uBox).append(form);
  })

  $('.uBox').click(() => {
    if(event.target === $('.uSub')[0]){
      let id = $(event.target).attr('data-id');
      let name = $(`.name${id}`);
      let picture = $(`.picture${id}`);
      let description = $(`.description${id}`);
    }
  })
})
