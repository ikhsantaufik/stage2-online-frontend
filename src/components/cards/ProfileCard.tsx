import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { UserType } from "@/types/types";
import { Collapse, Flex } from "@chakra-ui/react";

import BrandCard from "./BrandCard";
import ProfileCardHeader from "./ProfileCardHeader";
import ProfileCardBody from "./ProfileCardBody";
import ProfileCardFooter from "./ProfileCardFooter";
import BrandHeading from "@/components/utils/BrandHeading";
import CircleSpinner from "@/components/utils/CircleSpinner";

function ProfileCard() {
  const loggedUser: UserType | undefined = useSelector(
    (states: RootState) => states.loggedUser.value
  );

  if (loggedUser) {
    const {
      avatar,
      banner,
      bio,
      username,
      name,
      totalFollower,
      totalFollowing,
    } = loggedUser;

    return (
      <BrandCard>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"circle.font"}
          w={"100%"}
        >
          <BrandHeading text={"My Profile"} mb={0} />
        </Flex>
        <Collapse in={true} transition={{ enter: { duration: 0.5 } }}>
          <ProfileCardHeader
            buttonText={"Edit Profile"}
            avatar={avatar}
            banner={banner}
          />
          <ProfileCardBody username={username} name={name} bio={bio} />
          <ProfileCardFooter
            totalFollower={totalFollower}
            totalFollowing={totalFollowing}
          />
        </Collapse>
      </BrandCard>
    );
  }

  return (
    <BrandCard>
      <BrandHeading text={"My Profile"} />
      <CircleSpinner />
    </BrandCard>
  );
}

export default ProfileCard;
