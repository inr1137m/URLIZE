from calendar import WEDNESDAY
import os
from datetime import datetime
from time import sleep
from selenium import webdriver
# from selenium.webdriver.firefox.options import Options
from selenium.webdriver.chrome.options import Options

screen_width = 1024
screen_height = 768
# FFdriver = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))),'drivers','geckodriver') #Options()
CHMdriver = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))),'drivers','chromedriver') #Options()
options = Options()
options.add_argument("--headless")
# options.add_argument("window-size=1400,1500")

def takeSnip(url):
    try:
        # filename = url.replace('/','_') + ".png"
        print("get " + url + "...")
        if url == 'empty':
            return "Empty Url", 400
        # driver = webdriver.Firefox(options=options, executable_path=FFdriver)
        driver = webdriver.Chrome(options=options, executable_path=CHMdriver)
        # driver.maximize_window()  
        driver.get(url)
        # s = driver.get_window_size()
        # w = driver.execute_script('return document.body.parentNode.scrollWidth')
        # h = driver.execute_script('return document.body.parentNode.scrollHeight')
        # driver.set_window_size(w, h)
        # sleep(1)
        e1 = driver.find_element_by_tag_name('body')
        imgBin = e1.screenshot_as_png()
        # driver.set_window_size(s['width'], s['height'])
        driver.quit()
        
        # print("base64 : {}".format(b64))
        # outfile = os.path.join(output_directory, filename)
        # # driver.get_screenshot_as_file(outfile)
        # # driver.get_full_page_screenshot_as_file(outfile)
        # driver.quit()
        return imgBin, 200
    except Exception as e:
        return "Exception : {}".format(e), 400