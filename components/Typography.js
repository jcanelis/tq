import React from "react"
import { Text } from "react-native"
import PropTypes from "prop-types"

// Paper
import { useTheme } from "react-native-paper"

// Design
import { baseUnit } from "../constants/Base"

export function Paragraph({ children }) {
  const { colors } = useTheme()
  return (
    <Text
      style={{
        paddingTop: baseUnit * 2,
        paddingRight: 0,
        paddingBottom: baseUnit * 2,
        paddingLeft: 0,
        fontSize: baseUnit * 2.5,
        lineHeight: baseUnit * 4,
        fontWeight: 400,
        color: colors.tertiary,
      }}
    >
      {children}
    </Text>
  )
}

Paragraph.propTypes = {
  children: PropTypes.string,
}

export function SectionHeading({ children }) {
  const { colors } = useTheme()
  return (
    <Text
      style={{
        paddingLeft: baseUnit * 1,
        fontSize: baseUnit * 3,
        lineHeight: baseUnit * 6,
        fontWeight: 700,
        color: colors.tertiary,
      }}
    >
      {children}
    </Text>
  )
}

SectionHeading.propTypes = {
  children: PropTypes.string,
}
