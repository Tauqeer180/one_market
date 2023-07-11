import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  coverAndProfileContainer: {
    flex: 1,
    position: "relative",
    marginTop: 10,
  },
  withoutCover: {
    width: "100%",
    height: 138,
    resizeMode: "contain",
  },
  coverImage: {
    width: "100%",
    height: 138,
  },
  coverImageContainer: {
    backgroundColor: "#DBDBDB",
    height: 138,
  },
  addCoverIcon: { position: "absolute", zIndex: 999, bottom: 10, right: 10 },
  profileImageContainer: {
    backgroundColor: "#E5E5E5",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000000",
    position: "absolute",
    top: 90,
    left: 10,
    overflow: "hidden",
    width: 88,
    height: 90,
  },
  profileImage: {
    width: "100%",
    height: 95,
  },
  addProfileImageBtn: {
    position: "absolute",
    bottom: 29,
    left: 70,
    overflow: "hidden",
    borderRadius: 50,
    backgroundColor: "rgba(0,0,0,0.9)",
    width: 22,
    height: 22,
    alignItems: "center",
  },
  shopDiscriptionContainer: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingTop: 10,
    paddingBottom: 13,
  },
  shopNameWrapperContainer: {
    width: "70%",
    alignSelf: "flex-end",
    paddingRight: 12,
  },
  shopDetailsWrapperContainer: {
    width: "90%",
    marginTop: 14,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  shopNameContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shopName: {
    color: "#fff",
    fontSIze: 24,
    fontWeight: "700",
  },
  shopDetails: {
    fontSize: 10,
    color: "#FFFFFF",
  },
});

export const eidtIcon = {
  width: 22,
  height: 22,
  color: "#F1F1F1",
};

export const defaultProfilePicture =
  "https://cdn.vectorstock.com/i/1000x1000/32/12/default-avatar-profile-icon-vector-39013212.webp";
export const defaultCoverPhoto =
  "https://www.instant-gaming.com/themes/igv2/images/no-cover.png";
