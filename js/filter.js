$(function () {
  var $container = $('.portfolio_list'),
    $loadMoreBtn = $('#loadmore'),
    $addItemCount = 3, // 표시할 항목의 개수
    $added = 0,
    $allData = []; //content.json 목록 모두 저장할 빈 배열

  //$.getJSON('파일경로',function(data){...}); // data json파일의 최상위를 지정.

  $.getJSON('./data/portfolio.json', initGallery);
  function initGallery(data) {
    $allData = data; //json파일의 목록을 배열 $allData에 저장
    addItems();

    $loadMoreBtn.click(addItems);
  }

  function addItems() {
    var elements = [],
      slicedData = $allData.slice($added, $added + $addItemCount);

    // <li class="gallery-item">A Day in the Life</li>
    // $.each('대상', function(i, item){...})
    $.each(slicedData, function (i, item) {
      var itemHTML = `<li
      style="background-image: url(${item.imgUrl})"; class="item ${item.type}">
      <h2 class="title_bar center">${item.title}</h2>
      <p>${item.desc}</p>
      <a href="${item.projectLink}" class="big btn orange">
        view project
      </a>
    </li>`;

      elements.push($(itemHTML).get(0));
      //slicedData each
    });

    $container.append(elements);

    //added = added + slicedData.length;
    $added += slicedData.length;

    // portfolio filter
    var portfolioContainer = $('.portfolio_list');
    var mixer = mixitup(portfolioContainer, {
      selectors: {
        target: '.item',
      },
      animation: {
        duration: 300,
      },
    });
    mixer.forceRefresh();
  } //addItems
});
