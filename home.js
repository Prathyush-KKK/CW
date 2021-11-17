import React from 'react'

import Footer from './footer'
import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <h1 className={styles['text']}>PenEasy</h1>
            <span className={styles['text01']}>
              <span>A simple and easy platform</span>
              <br></br>
              <span>
                to help people simplify the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                painstaking
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                process of
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                managing your and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>your beloved&apos;s retirement funds.</span>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/istockphoto-1283690311-170667a-1200w.jpg"
            className={styles['image']}
          />
        </div>
      </div>
      <div className={styles['Section1']}>
        <div className={styles['container03']}>
          <div className={styles['Container04']}>
            <h6 className={styles['text11']}>
              <span>What is our goal?</span>
            </h6>
            <h3 className={` ${styles['text13']} ${projectStyles['healine']} `}>
              Easy Pension
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h3>
            <span
              className={` ${styles['text14']} ${projectStyles['textXL']} `}
            >
              <span className={styles['text15']}>
                 Our idea is targeted at trying to simplify the pension
                procedure that old people have to go through, which gets quite
                troublesome for them. Being old, it becomes very hectic for them
                and the government can’t consider the comfort of every old
                individual who approaches them. Hence, we would like to devise a
                method to automate the major steps to make the total experience
                pleasant for them.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className={styles['CardsContainer']}>
            <div className={styles['Card1']}>
              <div className={styles['container05']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                  <path d="M639.403 658.091l32 241.152-137.429-82.475c-13.269-7.851-29.995-8.363-43.904 0l-137.429 82.475 32.043-241.109c39.296 15.829 82.304 24.533 127.317 24.533s88.021-8.747 127.403-24.576zM654.165 554.283c-2.475 1.28-4.821 2.773-6.955 4.48-39.253 24.448-85.547 38.571-135.211 38.571-70.699 0-134.656-28.587-181.035-74.965s-74.965-110.336-74.965-181.035 28.587-134.656 74.965-181.035 110.336-74.965 181.035-74.965 134.656 28.587 181.035 74.965 74.965 110.336 74.965 181.035-28.587 134.656-74.965 181.035c-11.861 11.861-24.875 22.571-38.869 31.915zM304.64 612.48l-48.256 363.221c-3.115 23.339 13.312 44.8 36.693 47.915 9.984 1.323 19.669-0.939 27.563-5.717l191.36-114.816 191.403 114.816c20.224 12.117 46.421 5.589 58.539-14.635 5.205-8.661 6.955-18.389 5.717-27.563l-48.213-363.307c11.947-9.173 23.296-19.115 33.92-29.739 61.696-61.696 99.968-147.072 99.968-241.323s-38.272-179.627-99.968-241.365-147.115-99.968-241.365-99.968-179.627 38.272-241.365 99.968-99.968 147.115-99.968 241.365 38.272 179.627 99.968 241.365c10.667 10.667 22.016 20.608 33.963 29.781z"></path>
                </svg>
              </div>
              <h6
                className={` ${styles['text16']} ${projectStyles['textXL']} `}
              >
                Easy Accessibility
              </h6>
              <span className={styles['text17']}>
                <span>We aim to serve the application</span>
                <br></br>
                <span>
                  in multiple languages with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>interactive elements making it</span>
                <br></br>
                <span>easy for older people to interact.</span>
              </span>
            </div>
            <div className={styles['Card2']}>
              <div className={styles['container06']}>
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className={styles['icon02']}
                >
                  <path d="M731.429 859.429c0 9.714-8.571 18.286-18.286 18.286h-548.571c-21.143 0-18.286-22.286-18.286-36.571v-329.143h-109.714c-20 0-36.571-16.571-36.571-36.571 0-8.571 2.857-17.143 8.571-23.429l182.857-219.429c6.857-8 17.143-12.571 28-12.571s21.143 4.571 28 12.571l182.857 219.429c5.714 6.286 8.571 14.857 8.571 23.429 0 20-16.571 36.571-36.571 36.571h-109.714v219.429h329.143c5.143 0 10.857 2.286 14.286 6.286l91.429 109.714c2.286 3.429 4 8 4 12zM1097.143 621.714c0 8.571-2.857 17.143-8.571 23.429l-182.857 219.429c-6.857 8-17.143 13.143-28 13.143s-21.143-5.143-28-13.143l-182.857-219.429c-5.714-6.286-8.571-14.857-8.571-23.429 0-20 16.571-36.571 36.571-36.571h109.714v-219.429h-329.143c-5.143 0-10.857-2.286-14.286-6.857l-91.429-109.714c-2.286-2.857-4-7.429-4-11.429 0-9.714 8.571-18.286 18.286-18.286h548.571c21.143 0 18.286 22.286 18.286 36.571v329.143h109.714c20 0 36.571 16.571 36.571 36.571z"></path>
                </svg>
              </div>
              <h6
                className={` ${styles['text25']} ${projectStyles['textXL']} `}
              >
                Cross-Platform
              </h6>
              <span className={styles['text26']}>
                <span className={styles['text27']}>
                  No matter on what device you are on,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text28']}>
                  you can always access our platform with ease.
                </span>
              </span>
            </div>
            <div className={styles['Card3']}>
              <div className={styles['container07']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                  <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                </svg>
              </div>
              <h6
                className={` ${styles['text29']} ${projectStyles['textXL']} `}
              >
                Protection
              </h6>
              <span className={styles['text30']}>
                <span>
                  The application will store all
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span> data securely.</span>
                <br></br>
                <span>​</span>
                <span></span>
              </span>
            </div>
          </div>
          <div className={styles['WorkWithUs']}>
            <div className={styles['container08']}>
              <div className={styles['container09']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                  <path d="M384 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM640 512q-26 0-56-10 56-66 56-160 0-38-16-86t-40-76q30-10 56-10 70 0 120 51t50 121-50 120-120 50zM214 342q0-70 50-121t120-51 120 51 50 121-50 120-120 50-120-50-50-120zM712 560q106 16 188 59t82 107v128h-172v-128q0-98-98-166z"></path>
                </svg>
              </div>
              <h3
                className={` ${styles['text37']} ${projectStyles['healine']} `}
              >
                Work with us is a pleasure
              </h3>
              <span className={styles['text38']}>
                <span className={styles['text39']}>
                  Don&apos;t let your users guess by attaching tooltips and
                  popoves to any element. Just make sure you enable them first
                  via JavaScript.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className={styles['text42']}>
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and
                  you&apos;re good to go. Just make sure you enable them first
                  via JavaScript.
                </span>
                <br></br>
              </span>
              <span className={styles['text43']}>Check Notus PRO React!</span>
            </div>
            <div className={styles['container10']}>
              <div className={styles['container11']}>
                <img
                  alt="image"
                  src="/playground_assets/blue_wave.svg"
                  className={styles['image1']}
                />
              </div>
              <div className={styles['container12']}>
                <h4
                  className={` ${styles['text44']} ${projectStyles['healine']} `}
                >
                  <span className={styles['text45']}>Top Notch Services</span>
                  <br></br>
                </h4>
                <span className={styles['text46']}>
                  <span>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/group-old-healthy-people-walking-nature-australia-58310051-800h.jpg"
          className={styles['Image2']}
        />
      </div>
      <div className={styles['Section2']}>
        <div className={styles['container13']}></div>
        <div className={styles['GrowingCompanySection']}>
          <img
            alt="image"
            src="/playground_assets/00-1200w.jpg"
            className={styles['image3']}
          />
          <div className={styles['container14']}>
            <h3 className={` ${styles['text48']} ${projectStyles['healine']} `}>
              Help with technology!
            </h3>
            <span className={styles['text49']}>
              <span>We wish that you find this idea creative and helpful.</span>
              <br></br>
              <span>
                Some features we aim our application to implement:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className={styles['container15']}>
              <div className={styles['container16']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                  <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                </svg>
              </div>
              <span className={styles['text53']}>
                Application crafted towards the elderly
              </span>
            </div>
            <div className={styles['container17']}>
              <div className={styles['container18']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                  <path d="M917.806 357.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-368c-44.114 0-80 35.888-80 80v736c0 44.112 35.886 80 80 80h608c44.112 0 80-35.888 80-80v-496c0-14.332-4.372-39.35-42.194-90.924zM785.374 302.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-608c-8.672 0-16-7.328-16-16v-736c0-8.672 7.328-16 16-16 0 0 367.956-0.002 368 0v224c0 17.672 14.324 32 32 32h224v496z"></path>
                  <path d="M602.924 42.196c-51.574-37.822-76.592-42.196-90.924-42.196h-368c-44.112 0-80 35.888-80 80v736c0 38.632 27.528 70.958 64 78.39v-814.39c0-8.672 7.328-16 16-16h486.876c-9.646-7.92-19.028-15.26-27.952-21.804z"></path>
                </svg>
              </div>
              <span className={styles['text54']}>
                Easy Accessibility features
              </span>
            </div>
            <div className={styles['container19']}>
              <div className={styles['container20']}>
                <svg
                  viewBox="0 0 1024.5851428571427 1024"
                  className={styles['icon13']}
                >
                  <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-301.143-122.857-170.286 186.857c-6.857 8-16.571 12-26.857 12-4.571 0-9.143-0.571-13.143-2.286-14.286-5.714-23.429-19.429-23.429-34.286v-258.286l-269.714-110.286c-13.143-5.143-21.714-17.143-22.857-31.429-1.143-13.714 6.286-26.857 18.286-33.714l950.857-548.571c12-7.429 27.429-6.857 38.857 1.143zM812.571 862.857l126.286-756-819.429 472.571 192 78.286 493.143-365.143-273.143 455.429z"></path>
                </svg>
              </div>
              <span className={styles['text55']}>Effective Chatboxes</span>
            </div>
          </div>
        </div>
        <div className={styles['Team']}>
          <div className={styles['container21']}>
            <div className={styles['container22']}></div>
            <div className={styles['container23']}></div>
            <div className={styles['container24']}></div>
            <div className={styles['container25']}></div>
          </div>
        </div>
      </div>
      <div className={styles['Section3']}>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className={styles['image4']}
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
