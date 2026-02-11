from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

def get_driver():
    """
    Yeh function browser driver ko setup aur return karta hai.
    """
    print("Browser driver initialize ho raha hai...")
    
    chrome_options = Options()
    # Performance aur Data bachane ke liye options
    chrome_options.add_argument("--headless")  # Background mein chalega
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-extensions")
    
    try:
        # Driver ko automatic manage karta hai
        service = Service(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=chrome_options)
        
        # Timeout set karte hain taaki slow internet pe crash na ho
        driver.set_page_load_timeout(30) 
        print("Driver ready hai!")
        return driver
    except Exception as e:
        print(f"Driver setup mein error aaya: {e}")
        return None

if __name__ == "__main__":
    # Test karne ke liye
    test_driver = get_driver()
    if test_driver:
        test_driver.quit()
        print("Test successful!")