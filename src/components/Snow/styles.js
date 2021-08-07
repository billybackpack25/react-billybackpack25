import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    '@keyframes fall' : {
        '100%' : {
            transform: 'translateY(0)',
        }
    },
    snow: {
        '&.snow': {
            position: 'absolute',
            minWidth: '50vw',
            minHeight: '100vh',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
         },
         '& .svg': {
             position: 'absolute',
             width: '100%',
             height: '100%',
         },
        '& #snow-bottom-layer': {
            willChange: 'transform',
            transform: 'translateY(-768px)',
            animation: "$fall 45s infinite",
        },
        '& #snow-top-layer': {
            willChange: 'transform',
            transform: 'translateY(-768px)',
            animation: "$fall 22.5s infinite",
        }
    },
}))