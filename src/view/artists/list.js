// @flow
import React from 'react';
import {
  ListView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  Separator,
  ThumbListItem,
  items2DataSource,
} from '../common';
import AlbumList from '../albums/list';

class ArtistList extends React.Component {
  props: {
    navigator: Object;
    artists: Artists;
  };

  render() {
    return (
      <ListView
        dataSource={items2DataSource(this.props.artists)}
        renderRow={ (rowData: Artist) => {
          return (
            <TouchableOpacity
              onPress={ () => { this._pressRow(rowData); } }
            >
              <ThumbListItem
                imgUri={rowData.artwork}
              >
                <Text>{rowData.name}</Text>
                <Text>{rowData.albums.length}枚のアルバム</Text>
              </ThumbListItem>
            </TouchableOpacity>
          );
        } }
        renderSeparator={ (sectionID: number, rowID: number) => {
          return <Separator key={`${sectionID}-${rowID}`} />
        } }
      />
    )
  }

  _pressRow(artist: Artist) {
    this.props.navigator.push({
      component: AlbumList,
      title: artist.name,
      passProps: {
        albums: artist.albums,
      }
    });
  }
}

export default ArtistList;
