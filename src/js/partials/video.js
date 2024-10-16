function findVideos() {
    let videos = document.querySelectorAll('.js-video');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.js-video__link');
    let media = video.querySelector('.js-video__media');
    let button = video.querySelector('.js-video__button');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        $('.js-video').removeClass('js-video__link');
        $('.js-video').removeClass('js-video__button');
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('b-video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('b-video__media');

    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();