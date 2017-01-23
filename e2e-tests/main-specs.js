describe('Common App Navigation', function() {
    var EC = protractor.ExpectedConditions;

    it('Should browse between views', function() {
        browser.get('http://localhost:9000/');

        expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/home');

        element.all(by.tagName('li')).then(function(elm) {
            //Navigates to Seasons
            var button = elm[1].element(by.tagName('a')).click();
            browser.actions().mouseMove(button).click().perform();
            //Assertion
            expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/season/list');
        });

        element.all(by.tagName('li')).then(function(elm) {
            //Navigates to Home
            var button = elm[0].element(by.tagName('a')).click();
            browser.actions().mouseMove(button).click().perform();
            //Assertion
            expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/home');
        });

        element.all(by.tagName('li')).then(function(elm) {
            //Navigates to Driver List
            var button = elm[2].element(by.tagName('a')).click();
            browser.actions().mouseMove(button).click().perform();
            //Assertion
            expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/driver/list');
        });

        element.all(by.tagName('li')).then(function(elm) {
            //Navigates to Sport Info
            var button = elm[3].element(by.tagName('a')).click();
            browser.actions().mouseMove(button).click().perform();
            //Assertion
            expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/sport');
        });

    });
});