import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'channels',
  initialState: {
    list: [],
    loading: false,
    selectedChannel: {},
  },
  reducers: {
    channelsApiCalled: (channels) => {
      channels.loading = true;
    },

    channelsApiCallFailed: (channels) => {
      channels.loading = false;
    },

    channelsLoaded: (channels, action) => {
      channels.list = action.payload.data;
      channels.loading = false;
    },

    channelSelected: (channels, action) => {
      const selectedChannel = action.payload.data[0];
      channels.selectedChannel = {
        ...selectedChannel,
        thumbnail_url: channels.list
          .filter((channel) => channel.id === selectedChannel.broadcaster_id)
          .map((channel) => channel.thumbnail_url),
      };
    },
  },
});

export default slice.reducer;

const {
  channelsApiCalled,
  channelsApiCallFailed,
  channelsLoaded,
  channelSelected,
} = slice.actions;

export const loadChannels = (searchCriteria) =>
  apiCallBegan({
    url: `/search/channels?query=${searchCriteria}`,
    onStart: channelsApiCalled.type,
    onSuccess: channelsLoaded.type,
    onError: channelsApiCallFailed.type,
  });

export const selectChannel = (id) =>
  apiCallBegan({
    url: `/channels?broadcaster_id=${id}`,
    //   onStart: channelsApiCalled.type,
    onSuccess: channelSelected.type,
    //   onError: channelsApiCallFailed.type,
  });
