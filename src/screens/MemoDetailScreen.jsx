import React from "react";
import {
     View, ScrollView, Text, StyleSheet, 
} from "react-native";

import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoDetailScreen() {
    return (
        <View style={styles.container}>
            <AppBar />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2022年5月14日 11:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    トイレットペッパーが一個にっこ三個必要だと思わないのかい君は
                </Text>
            </ScrollView>
            <CircleButton style={{top: 160, bottom: "auto"}} name="edit-2" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
      memoHeader: {
          backgroundColor: "#467FD3",
          height: 96,
          justifyContent: "center",
          paddingVertical: 24,
          paddingHorizontal: 19,
      },
      memoTitle: {
          color: "#ffffff",
          fontSize: 20,
          fontWeight: "bold",
          lineHeight: 32,
      },
      memoDate: {
          color: "#ffffff",
          fontSize: 12,
          lineHeight: 16,
      },
      memoBody: {
          paddingVertical: 32,
          paddingHorizontal: 27,
      },
      memoText: {
          fontSize: 16,
          lineHeight: 24,
      },
});