import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import {
  styles,
  eidtIcon,
  defaultProfilePicture,
  defaultCoverPhoto,
} from "./styles";
import { AddPhotoIcon, EditIcon, PlusIcon } from "../svgs/svgs";
import {
  pickImage,
  uploadDp,
  uploadCover
} from "./services";
import Loader from "../app_loader";
import EditShopNameAndDescripton from "../edit_shop_name_description";
import { useDispatch } from "react-redux";

export default function DpCover({
  shopInfo,
  setShopUpate,
  selectCoverBtn = true,
  editBtn = true,
  addBtn = true,
}) {
  const [profilePictureloading, setProfilePictureloading] = useState(false);
  const [coverPictureloading, setCoverPictureloading] = useState(false);
  const [
    editShopNameAndDescriptionScreen,
    setEditShopNameAndDescriptionScreen,
  ] = useState(false);
  let shopName = shopInfo && shopInfo[0]?.shop_name;
  let docId = shopInfo && shopInfo[0]?._id;
  let shopDescription = shopInfo && shopInfo[0]?.shop_discription;
  let shopProfilePicture = shopInfo && shopInfo[0]?.shop_profile_picture;
  let shopCover = shopInfo && shopInfo[0]?.shop_cover_photo;
  const dispatch = useDispatch();

  return (
    <View style={styles.coverAndProfileContainer}>
      <View style={styles.coverContainer}>
        <View style={styles.coverImageContainer}>
          <Image
            source={{ uri: shopCover ? shopCover : defaultCoverPhoto }}
            alt="shop_cover"
            style={shopCover ? styles.coverImage : styles.withoutCover}
          />
          {selectCoverBtn && (
            <TouchableOpacity
              style={styles.addCoverIcon}
              onPress={() =>
                pickImage(
                  docId,
                  uploadCover,
                  setShopUpate,
                  setCoverPictureloading,
                  dispatch
                )
              }
            >
              <AddPhotoIcon />
            </TouchableOpacity>
          )}
          {coverPictureloading && <Loader />}
        </View>
        <View style={styles.shopDiscriptionContainer}>
          <View style={styles.shopNameWrapperContainer}>
            <View style={styles.shopNameContainer}>
              <Text style={styles.shopName}>
                {shopName ? shopName : "Add your shop name"}
              </Text>
              {editBtn && (
                <TouchableOpacity
                  onPress={() => setEditShopNameAndDescriptionScreen(true)}
                >
                  <EditIcon
                    width={eidtIcon.width}
                    height={eidtIcon.height}
                    color={eidtIcon.color}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.shopDetailsWrapperContainer}>
            <Text style={styles.shopDetails}>
              {shopDescription
                ? shopDescription
                : "Please add some descrition about your shop"}
            </Text>
          </View>
        </View>
        <View style={styles.profileImageContainer}>
          <View style={{}}>
            <Image
              source={{
                uri: shopProfilePicture
                  ? shopProfilePicture
                  : defaultProfilePicture,
              }}
              alt="profile_image"
              style={styles.profileImage}
            />
          </View>
          {profilePictureloading && <Loader />}
        </View>
        {addBtn && (
          <TouchableOpacity
            style={styles.addProfileImageBtn}
            onPress={() =>
              pickImage(
                docId,
                uploadDp,
                setShopUpate,
                setProfilePictureloading,
                dispatch
              )
            }
          >
            <PlusIcon />
          </TouchableOpacity>
        )}
      </View>
      {editShopNameAndDescriptionScreen && (
        <EditShopNameAndDescripton
          setEditShopNameAndDescriptionScreen={
            setEditShopNameAndDescriptionScreen
          }
          docId={docId}
          setShopUpate={setShopUpate}
        />
      )}
    </View>
  );
}
