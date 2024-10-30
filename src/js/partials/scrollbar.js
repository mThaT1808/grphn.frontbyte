const container = document.querySelector('body');
const content = document.querySelector('.b-page-wrapper');
const scrollbar = document.querySelector('.b-custom-scrollbar');

function updateScrollbar() {
    const contentRatio = container.clientHeight / content.scrollHeight;
    scrollbar.style.height = `${contentRatio * 100}%`;
    const scrollRatio = content.scrollTop / (content.scrollHeight - container.clientHeight);
    scrollbar.style.top = `${scrollRatio * (container.clientHeight - scrollbar.clientHeight)}px`;
}

content.addEventListener('scroll', updateScrollbar);
updateScrollbar();

scrollbar.addEventListener('mousedown', (e) => {
    const offset = e.clientY - scrollbar.getBoundingClientRect().top;

    function onMouseMove(event) {
        const scrollTop = event.clientY - container.getBoundingClientRect().top - offset;
        const scrollPercent = scrollTop / (container.clientHeight - scrollbar.clientHeight);
        content.scrollTop = scrollPercent * (content.scrollHeight - container.clientHeight);
        updateScrollbar();
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});