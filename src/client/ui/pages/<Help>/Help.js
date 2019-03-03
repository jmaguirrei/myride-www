import Player from 'yt-player';const ratio = 315 / 560;export default (client, id) => {  const { YTPlayer } = client.ui.components;  return client.hoc({    id,    classes: {      name: `        padding: 20px;        text-align: center;      `,    },    state() {      const div = document.getElementById('help-wrapper');      return {        width: div ? div.getBoundingClientRect().width : 0,      };    },    actions(props, store) {      return {        onPlaying: player => {          store.get('youtubeVideos').forEach(video => {            // Stop other videos playing            const isSameVideo = video.videoId === player.videoId;            if (video.getState() === 'playing' && !isSameVideo) video.stop();          });        },        onMounted: player => {          store.set({            youtubeVideos: prevVideos => ([ ...prevVideos, player ]),          });        },      };    },    render({ state, classes, actions }) {      return (        <div id='help-wrapper'>          {            client.lib.Help.YoutubeVideos.map(video => {              return (                <div>                  <div class={classes('name')}>{video.name}</div>                  <YTPlayer                    Player={Player}                    videoId={video.src}                    width={state.width}                    height={Math.floor(state.width * ratio)}                    onPlaying={actions.onPlaying}                    onMounted={actions.onMounted}                  />                </div>              );            })          }        </div>      );    }  });};