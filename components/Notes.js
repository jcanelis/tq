import React, { useContext } from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import * as WebBrowser from "expo-web-browser"
import PropTypes from "prop-types"

// Context
import SpotifyContext from "../context/spotify"

// Components
import Chip from "../components/Chip"

// Paper
import { Button, useTheme, Text } from "react-native-paper"

// Design
import { baseUnit, verticalRhythm, GOLD } from "../constants/Base"

const Notes = ({ data }) => {
  const navigation = useNavigation()
  const { colors } = useTheme()
  const spotifyContext = useContext(SpotifyContext)
  const { currentlyPlaying } = spotifyContext
  const { track } = currentlyPlaying
  const { artist } = currentlyPlaying

  // Format release date text
  const dateData = currentlyPlaying.spotifyData.album.release_date
  const date = new Date(dateData)
  const dateConfig = {
    year: "numeric",
    month: "long",
  }
  const releaseDate = date.toLocaleDateString(undefined, dateConfig)

  // Provide a link to Genius.com
  const _handlePressButtonAsync = async (url) => {
    await WebBrowser.openBrowserAsync(url)
  }

  return (
    <View
      style={{
        gap: baseUnit * 3,
      }}
    >
      {data.artists[0].genres[0] !== "classical" && (
        <Text
          variant={"labelLarge"}
          style={{
            color: colors.tertiary,
            opacity: 0.9,
          }}
        >
          Released {releaseDate}
        </Text>
      )}

      <Text
        variant={"bodyLarge"}
        style={{
          color: colors.tertiary,
          opacity: 0.85,
        }}
      >
        {data.description}
      </Text>

      <Chip
        text={"Ask ChatGPT about this song."}
        action={() => {
          navigation.navigate("Powered by GPT-4 API", {
            query: `Tell me about the song, ”${track}” by ${artist}.`,
          })
        }}
      />

      {data.geniusData && data.geniusData.result.url && (
        <Button
          title="View this track on Genius"
          color={GOLD}
          onPress={() => {
            _handlePressButtonAsync(data.geniusData.result.url)
          }}
        />
      )}
    </View>
  )
}

Notes.propTypes = {
  data: PropTypes.object,
}

export default Notes
