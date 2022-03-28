import os
from datetime import datetime
from time import sleep
from selenium import webdriver
from selenium.webdriver.firefox.options import Options

screen_width = 1024
screen_height = 768
# FFdriver = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))),'drivers','geckodriver') #Options()
FFdriver = os.path.join(os.path.dirname(os.path.realpath(__file__)),'geckodriver') #Options()
print("FF DRIVER loc : {}".format(FFdriver))
options = Options()
options.add_argument("--headless")

def takeSnip(url):
    try:
        # filename = url.replace('/','_') + ".png"
        print("get " + url + "...")
        if url == 'empty':
            return "Empty Url", 400
        driver = webdriver.Firefox(options=options, executable_path=FFdriver)
        driver.set_window_size(screen_width, screen_height)
        driver.get(url)
        sleep(3)
        imgBin = driver.get_full_page_screenshot_as_png()
        # print("base64 : {}".format(b64))
        # outfile = os.path.join(output_directory, filename)
        # # driver.get_screenshot_as_file(outfile)
        # # driver.get_full_page_screenshot_as_file(outfile)
        driver.quit()
        return imgBin, 200
    except Exception as e:
        return "Exception : {}".format(e), 400