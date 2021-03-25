import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import NotificationList218595Navigator from '../features/NotificationList218595/navigator';
import Settings218594Navigator from '../features/Settings218594/navigator';
import Settings218586Navigator from '../features/Settings218586/navigator';
import UserProfile218584Navigator from '../features/UserProfile218584/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
NotificationList218595: { screen: NotificationList218595Navigator },
Settings218594: { screen: Settings218594Navigator },
Settings218586: { screen: Settings218586Navigator },
UserProfile218584: { screen: UserProfile218584Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
