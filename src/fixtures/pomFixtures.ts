import {test as baseTest} from '@playwright/test';
import {LandingPage} from '../../src/tests/PlaywrightTutorialInTs/pages/landingPage';
import {HomePage} from '../../src/tests/PlaywrightTutorialInTs/pages/homePage';
import {SignInPage} from '../../src/tests/PlaywrightTutorialInTs/pages/signinPage';
import {SettingsPage} from '../../src/tests/PlaywrightTutorialInTs/pages/settingsPage';

type pages = {
    landingPage: LandingPage,
    homePage: HomePage,
    signinPage: SignInPage,
    settingsPage: SettingsPage
}

const testPages = baseTest.extend<pages>({
    landingPage: async({page}, use)=>{
        await use(new LandingPage(page));
    },
    homePage: async({page}, use)=>{
        await use(new HomePage(page));
    },
    signinPage: async({page}, use)=>{
        await use(new SignInPage(page));
    },
    settingsPage: async({page}, use)=>{
        await use(new SettingsPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;