package com.doggywood.selenium.loginpagetests;

import java.util.Map;

import org.testng.Assert;
//import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.doggywood.selenium.base.TestUtilities;
import com.doggywood.selenium.pages.LoginPage;
import com.doggywood.selenium.pages.SecureAreaPage;
import com.doggywood.selenium.pages.WelcomePage;
import com.doggywood.selenium.base.CsvDataProviders;

public class PositiveLogInTestsDataProvider extends TestUtilities {

//	@Parameters({ "username", "password", "expectedMessage" })
	@Test(priority = 1, dataProvider="csvReader", dataProviderClass = CsvDataProviders.class)
//	public void negativeTest(String username, String password, String expectedErrorMessage) {
	public void positiveLogInTest(Map<String, String> testData) { 
		
		// incoming data
		String no = testData.get("no");
		String username = testData.get("username");
		String password = testData.get("password"); 
		String description = testData.get("description");
		
		
		log.info("Starting positiveTest: " + no + " for " + description);

		// open main page
		WelcomePage welcomePage = new WelcomePage(driver, log);
		welcomePage.openPage();

		// Click on Form Authentication link
		LoginPage loginPage = welcomePage.clickFormAuthenticationLink();

		// execute positive login
		loginPage.positiveLogIn(username, password);
		// execute log in
		SecureAreaPage secureAreaPage = loginPage.logIn(username, password);
		
		sleep(1500);
		// Verifications
		// New page url is expected
		Assert.assertEquals(secureAreaPage.getCurrentUrl(), secureAreaPage.getBasePageUrl() + no);

		// log out button is visible
		Assert.assertTrue(secureAreaPage.isLogOutButtonVisible(), "LogOut Button is not visible.");

	}
}
