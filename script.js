const videoEl = document.getElementById('video')
const button = document.getElementById('button')

// Prompt user to select media stream, pass to video elememt, then play
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoEl.srcObject = mediaStream
        videoEl.onloadedmetadata = ()=> {
            videoEl.play()
        }
    } catch (error){
        console.log("Something went wrong", error)
    }
}

// On Page Load
selectMediaStream()