export default (client, id) => {  const { Footer } = client.ui.fragments;  return client.hoc({    id,    classes: {      scrollable: `        position: relative;        width: 100%;        height: 100vh;        overflow-x: hidden;        overflow-y: scroll;        -webkit-overflow-scrolling: touch;      `,    },    styles: {      page: isSelected => `        position: absolute;        width: 100%;        transition: opacity .3s ease;        opacity: ${isSelected ? 1 : 0};        pointer-events: ${isSelected ? 'auto' : 'none'};      `,    },    render({ props, classes, styles }) {      const { pages, currentPage } = props;      return Object.keys(pages).map(page => {        const Page = pages[page];        return (          <div            class={classes('scrollable')}            style={styles.page(page === currentPage)}            data-route={page}          >            <Page/>            <Footer/>          </div>        );      });    }  });};