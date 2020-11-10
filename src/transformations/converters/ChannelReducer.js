/**
 * @param {Uint8Array} buffer 
 * @param {Number} nbChannel 
 * @param {Number[]} channelToRemoveIndexArray 
 */
function channelReducer(buffer, nbChannels, channelToRemoveIndexArray) {
    const newBufferSize = (buffer.length / nbChannels) * (nbChannels - channelToRemoveIndexArray.length);
    const newBuffer = new Uint8Array(newBufferSize);

    const channelWillBeRemoved = new Array(nbChannels);
    for (let channelIndex = 0; channelIndex < nbChannels; channelIndex++) {
        channelWillBeRemoved[channelIndex] = (
            channelToRemoveIndexArray.indexOf(channelIndex) >= 0
        );
    }

    let offset = 0;
    for (let i = 0; i < buffer.length; i += nbChannels) {
        for (let j = 0; j < nbChannels; j++) {
            if (channelWillBeRemoved[j] !== true) {
                newBuffer[offset] = buffer[i + j]; 
                offset++;
            }
        }
    }

    return newBuffer;
}

export default channelReducer;