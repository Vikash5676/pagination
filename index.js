$(document).ready(function () {
  $.get("https://jsonplaceholder.typicode.com/users/1/todos", function (data) {
    const totalData = data.length;
    const perPage = 5;
    const totalPage = totalData / perPage;
    for (let i = 1; i <= totalPage; i++) {
      $(".pagination").append(
        `<li class="page-item" value=${i}><a class="page-link" href="#">${i}</a></li>`
      );
    }
    $(".pagination li").click(function (datas) {
      const page = datas.currentTarget.innerText;
      const currentPage = page * perPage - perPage;
      const lastContent = currentPage + perPage;

      for (let j = currentPage; j < lastContent; j++) {
        console.log(currentPage);
        $(".show_pages").append("<ul><li>" + data[j].title + "</li></ul>");
      }
    });
    $(".show_pages").empty();
  });
});
