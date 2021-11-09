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

button.addEventListener('click', async ()=> {
    // Disable button
    button.disabled = true

    // Start picture in picture
    await videoEl.requestPictureInPicture()

    // Reset Button
    button.disabled = false
})

// On Page Load
selectMediaStream()