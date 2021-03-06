import React from 'react'

import avatar from '../images/avatar.png';
import ru from '../images/ru.png';
import de from '../images/de.png';
import en from '../images/uk.png';

export default function About(props) {

    const { paperColor, primaryColor, accentColor } = props;

    return (
        <section className="About" style={{ backgroundColor: paperColor }}>
            <div className='about__general'>
                <div className='about__text'>
                    <h1 className='about__name' style={{ color: accentColor }}>Даниил Ломовицкий</h1>
                    <p className='about__job' style={{ color: primaryColor }}>Frontend-разработчик</p>
                </div>
                <img className='about__image' src={avatar} alt='Аватар'></img>
            </div>

            <div className='about__section'>
                <h2
                    className='about__section-title' style={{ color: primaryColor }}>
                    Контакты
                </h2>

                <div className='about__contacts-content'>
                    <div className='about__contacts-column'>
                        <div className='about__contacts-entry'>
                            <svg className='about__contacts-icon' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M3.62 7.79C5.06 10.62 7.38 12.94 10.21 14.38L12.41 12.18C12.69 11.9 13.08 11.82 13.43 11.93C14.55 12.3 15.75 12.5 17 12.5C17.2652 12.5 17.5196 12.6054 17.7071 12.7929C17.8946 12.9804 18 13.2348 18 13.5V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C12.4913 18 8.1673 16.2089 4.97918 13.0208C1.79107 9.8327 0 5.50868 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H4.5C4.76522 0 5.01957 0.105357 5.20711 0.292893C5.39464 0.48043 5.5 0.734784 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill={accentColor} />
                            </svg >
                            <a className='about__contacts-link' href='tel:+79168533342' style={{ color: primaryColor }}>+7 (916) 853-33-42</a>
                        </div>

                        <div className='about__contacts-entry'>
                            <svg className='about__contacts-icon' viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill={accentColor} />
                            </svg>
                            <a className='about__contacts-link' href='mailto:daniil@lomovitsky.ru' style={{ color: primaryColor }}>daniil@lomovitsky.ru</a>
                        </div>
                    </div>
                    <div className='about__location-column'>
                        <div className='about__contacts-entry'>
                            <svg className='about__contacts-icon' viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5V9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0V0Z" fill={accentColor} />
                            </svg>
                            <p className='about__contacts-text' style={{ color: primaryColor }}>Москва</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className='about__section'>
                <h2
                    className='about__section-title' style={{ color: primaryColor }}>
                    Технологии
                </h2>
                <div className='about__techs-content'>
                    <div className='about__techs-card'>
                        <svg className='about__techs-icon' viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 25.8844L21.1854 23.8756L22.1564 13.0311H9.37453L9.05675 9.42222H22.4741L22.8272 5.88444H5.17276L6.16141 16.5689H18.3253L17.9193 21.1556L14 22.2222L10.0807 21.1556L9.83354 18.2044H6.30265L6.81463 23.8756L14 25.8844ZM0 0H28L25.4754 28.8L14 32L2.52459 28.8L0 0Z" fill={accentColor} />
                        </svg>

                        <p className='about__techs-text' style={{ color: primaryColor }}>HTML5</p>
                    </div>
                    <div className='about__techs-card'>
                        <svg className='about__techs-icon' viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.28873 0L3.34054 5.93778H23.165L22.5231 9.77778H2.71328L1.7505 15.6978H21.5749L20.4663 22.4711L12.4723 25.6889L5.54326 22.4711L6.02465 19.5556H1.15241L0 26.6667L11.4512 32L24.6529 26.6667L26.4034 15.9467L26.7535 13.7956L29 0H4.28873Z" fill={accentColor} />
                        </svg>
                        <p className='about__techs-text' style={{ color: primaryColor }}>CSS3</p>
                    </div>
                    <div className='about__techs-card'>
                        <svg className='about__techs-icon' viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H31V32H0V0ZM8.14611 26.7378C8.835 28.2489 10.1956 29.4933 12.5206 29.4933C15.1039 29.4933 16.8778 28.0711 16.8778 24.96V14.6844H13.95V24.8889C13.95 26.4178 13.3472 26.8089 12.4 26.8089C11.4011 26.8089 10.9878 26.0978 10.5228 25.2622L8.14611 26.7378ZM18.445 26.4178C19.3061 28.16 21.0456 29.4933 23.7667 29.4933C26.5222 29.4933 28.5889 28.0178 28.5889 25.2978C28.5889 22.7911 27.1939 21.6711 24.7139 20.5689L23.9906 20.2489C22.7333 19.6978 22.1994 19.3244 22.1994 18.4356C22.1994 17.7067 22.7333 17.1378 23.5944 17.1378C24.4211 17.1378 24.9722 17.5111 25.4717 18.4356L27.7278 16.8889C26.7806 15.1822 25.4372 14.5244 23.5944 14.5244C20.9939 14.5244 19.3233 16.2311 19.3233 18.4889C19.3233 20.9422 20.7183 22.0978 22.8194 23.0222L23.5428 23.3422C24.8861 23.9467 25.6783 24.32 25.6783 25.3511C25.6783 26.2044 24.9033 26.8267 23.6978 26.8267C22.2683 26.8267 21.4417 26.0622 20.8217 24.9956L18.445 26.4178Z" fill={accentColor} />
                        </svg>
                        <p className='about__techs-text' style={{ color: primaryColor }}>JavaScript</p>
                    </div>
                    <div className='about__techs-card'>
                        <svg className='about__techs-icon' viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 12.8556C19.7247 12.8556 21.1312 14.2531 21.1312 16C21.1312 17.6637 19.7247 19.0779 18 19.0779C16.2753 19.0779 14.8688 17.6637 14.8688 16C14.8688 14.2531 16.2753 12.8556 18 12.8556ZM10.2474 29.3097C11.3023 29.9419 13.613 28.977 16.2753 26.4814C15.4047 25.4998 14.5507 24.435 13.747 23.3203C12.374 23.1872 11.0177 22.9876 9.72837 22.7214C8.87442 26.2818 9.19256 28.7274 10.2474 29.3097ZM11.4363 19.76L10.9507 18.9115C10.7665 19.394 10.5823 19.8765 10.4651 20.3423C10.9172 20.4421 11.4195 20.5253 11.9386 20.6085C11.7712 20.3257 11.6037 20.0428 11.4363 19.76ZM22.387 18.4956L23.7433 16L22.387 13.5044C21.8847 12.6227 21.3488 11.8407 20.8633 11.0588C19.9591 11.0089 19.0047 11.0089 18 11.0089C16.9953 11.0089 16.0409 11.0089 15.1367 11.0588C14.6512 11.8407 14.1153 12.6227 13.613 13.5044L12.2567 16L13.613 18.4956C14.1153 19.3773 14.6512 20.1593 15.1367 20.9412C16.0409 20.9911 16.9953 20.9911 18 20.9911C19.0047 20.9911 19.9591 20.9911 20.8633 20.9412C21.3488 20.1593 21.8847 19.3773 22.387 18.4956ZM18 7.31541C17.6819 7.68143 17.347 8.06408 17.0121 8.51328C17.347 8.51328 17.6651 8.51328 18 8.51328C18.3349 8.51328 18.653 8.51328 18.9879 8.51328C18.653 8.06408 18.3181 7.68143 18 7.31541ZM18 24.6846C18.3181 24.3186 18.653 23.9359 18.9879 23.4867C18.653 23.4867 18.3349 23.4867 18 23.4867C17.6651 23.4867 17.347 23.4867 17.0121 23.4867C17.347 23.9359 17.6819 24.3186 18 24.6846ZM25.7358 2.69028C24.6977 2.05807 22.387 3.02302 19.7247 5.5186C20.5953 6.50019 21.4493 7.56497 22.253 8.67965C23.626 8.81275 24.9823 9.0124 26.2716 9.27859C27.1256 5.71824 26.8074 3.27258 25.7358 2.69028ZM24.5637 12.24L25.0493 13.0885C25.2335 12.606 25.4177 12.1235 25.5349 11.6577C25.0828 11.5579 24.5805 11.4747 24.0614 11.3915C24.2288 11.6743 24.3963 11.9572 24.5637 12.24ZM26.9916 0.510815C29.453 1.90834 29.7209 5.58515 28.6828 9.87753C32.9358 11.1253 36 13.1883 36 16C36 18.8117 32.9358 20.8747 28.6828 22.1225C29.7209 26.4149 29.453 30.0917 26.9916 31.4892C24.547 32.8867 21.2149 31.2895 18 28.2449C14.7851 31.2895 11.453 32.8867 8.99163 31.4892C6.54698 30.0917 6.27907 26.4149 7.31721 22.1225C3.06419 20.8747 0 18.8117 0 16C0 13.1883 3.06419 11.1253 7.31721 9.87753C6.27907 5.58515 6.54698 1.90834 8.99163 0.510815C11.453 -0.886705 14.7851 0.710461 18 3.75506C21.2149 0.710461 24.547 -0.886705 26.9916 0.510815ZM26.506 16C27.0753 17.2478 27.5777 18.4956 27.9963 19.76C31.5126 18.7119 33.4884 17.2145 33.4884 16C33.4884 14.7855 31.5126 13.2881 27.9963 12.24C27.5777 13.5044 27.0753 14.7522 26.506 16ZM9.49395 16C8.92465 14.7522 8.42233 13.5044 8.00372 12.24C4.48744 13.2881 2.51163 14.7855 2.51163 16C2.51163 17.2145 4.48744 18.7119 8.00372 19.76C8.42233 18.4956 8.92465 17.2478 9.49395 16ZM24.5637 19.76C24.3963 20.0428 24.2288 20.3257 24.0614 20.6085C24.5805 20.5253 25.0828 20.4421 25.5349 20.3423C25.4177 19.8765 25.2335 19.394 25.0493 18.9115L24.5637 19.76ZM19.7247 26.4814C22.387 28.977 24.6977 29.9419 25.7358 29.3097C26.8074 28.7274 27.1256 26.2818 26.2716 22.7214C24.9823 22.9876 23.626 23.1872 22.253 23.3203C21.4493 24.435 20.5953 25.4998 19.7247 26.4814ZM11.4363 12.24C11.6037 11.9572 11.7712 11.6743 11.9386 11.3915C11.4195 11.4747 10.9172 11.5579 10.4651 11.6577C10.5823 12.1235 10.7665 12.606 10.9507 13.0885L11.4363 12.24ZM16.2753 5.5186C13.613 3.02302 11.3023 2.05807 10.2474 2.69028C9.19256 3.27258 8.87442 5.71824 9.72837 9.27859C11.0177 9.0124 12.374 8.81275 13.747 8.67965C14.5507 7.56497 15.4047 6.50019 16.2753 5.5186Z" fill={accentColor} />
                        </svg>
                        <p className='about__techs-text' style={{ color: primaryColor }}>React</p>
                    </div>
                    <div className='about__techs-card'>
                        <svg className='about__techs-icon' viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 0C13.58 0 13.1444 0.110345 12.7867 0.315271L1.21333 7.0936C0.466667 7.53498 0 8.35468 0 9.23744V22.7626C0 23.6453 0.466667 24.465 1.21333 24.9064L4.24667 26.6719C5.72444 27.397 6.22222 27.4128 6.90667 27.4128C9.08444 27.4128 10.3444 26.0729 10.3444 23.7399V10.3882C10.3444 10.199 10.1889 10.0414 10.0022 10.0414H8.55556C8.35333 10.0414 8.19778 10.199 8.19778 10.3882V23.7399C8.19778 24.7803 7.14 25.8049 5.44444 24.9379L2.25556 23.0936C2.14667 23.0148 2.08444 22.8887 2.08444 22.7626V9.23744C2.08444 9.09557 2.14667 8.96946 2.25556 8.9064L13.8289 2.14384C13.9222 2.08079 14.0778 2.08079 14.1711 2.14384L25.7444 8.9064C25.8533 8.96946 25.9156 9.09557 25.9156 9.23744V22.7626C25.9156 22.8887 25.8533 23.0148 25.7444 23.0936L14.1711 29.8562C14.0778 29.9192 13.9222 29.9192 13.8133 29.8562L10.8889 28.0591C10.7644 28.0118 10.64 27.9961 10.5622 28.0434C9.73778 28.5163 9.58222 28.6108 8.82 28.8473C8.63333 28.9103 8.33778 29.0207 8.92889 29.3517L12.7867 31.669C13.16 31.8897 13.5644 32 14 32C14.4356 32 14.84 31.8897 15.2133 31.669L26.7867 24.9064C27.5333 24.465 28 23.6453 28 22.7626V9.23744C28 8.35468 27.5333 7.53498 26.7867 7.0936L15.2133 0.315271C14.8556 0.110345 14.4356 0 14 0ZM17.1111 9.69458C13.8133 9.69458 11.8378 11.0975 11.8378 13.4621C11.8378 16 13.7978 16.7409 16.9711 17.0562C20.7511 17.4345 21.0467 18.002 21.0467 18.7586C21.0467 20.067 20.0044 20.6187 17.5778 20.6187C14.4978 20.6187 13.8444 19.8463 13.6111 18.3015C13.58 18.1438 13.44 18.0177 13.2689 18.0177H11.7756C11.5889 18.0177 11.4489 18.1596 11.4489 18.3645C11.4489 20.3192 12.5067 22.6837 17.5778 22.6837C21.2333 22.6837 23.3333 21.2177 23.3333 18.664C23.3333 16.1261 21.6533 15.464 18.0911 14.9754C14.4978 14.5025 14.14 14.2502 14.14 13.399C14.14 12.6897 14.4511 11.7438 17.1111 11.7438C19.4444 11.7438 20.3622 12.264 20.72 13.8877C20.7511 14.0453 20.8911 14.1557 21.0467 14.1557H22.5556C22.6333 14.1557 22.7267 14.1241 22.7889 14.0453C22.8511 13.9823 22.8978 13.8877 22.8667 13.7931C22.6489 10.9872 20.8133 9.69458 17.1111 9.69458Z" fill={accentColor} />
                        </svg>
                        <p className='about__techs-text' style={{ color: primaryColor }}>Node.js</p>
                    </div>
                    <div className='about__techs-card'>
                        <svg className='about__techs-icon' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.948712 13.7423L10.2037 4.47135L12.9097 7.1934C12.5254 8.55442 13.1499 10.0435 14.3988 10.7641V19.6347C13.4381 20.1791 12.7976 21.2199 12.7976 22.4048C12.7976 23.2541 13.135 24.0687 13.7356 24.6692C14.3361 25.2698 15.1507 25.6072 16 25.6072C16.8493 25.6072 17.6639 25.2698 18.2644 24.6692C18.865 24.0687 19.2024 23.2541 19.2024 22.4048C19.2024 21.2199 18.5619 20.1791 17.6012 19.6347V11.8529L20.9157 15.1994C20.8036 15.4396 20.8036 15.7118 20.8036 16C20.8036 16.8493 21.141 17.6639 21.7416 18.2644C22.3421 18.865 23.1567 19.2024 24.006 19.2024C24.8553 19.2024 25.6699 18.865 26.2704 18.2644C26.871 17.6639 27.2084 16.8493 27.2084 16C27.2084 15.1507 26.871 14.3361 26.2704 13.7356C25.6699 13.135 24.8553 12.7976 24.006 12.7976C23.7178 12.7976 23.4456 12.7976 23.2054 12.9097L19.0903 8.7946C19.5066 7.30548 18.7381 5.67225 17.2489 5.04779C16.5604 4.79159 15.8399 4.72755 15.1994 4.90368L12.4774 2.19765L13.7423 0.948712C14.9912 -0.316237 17.0088 -0.316237 18.2577 0.948712L31.0513 13.7423C32.3162 14.9912 32.3162 17.0088 31.0513 18.2577L18.2577 31.0513C17.0088 32.3162 14.9912 32.3162 13.7423 31.0513L0.948712 18.2577C-0.316237 17.0088 -0.316237 14.9912 0.948712 13.7423Z" fill={accentColor} />
                        </svg>
                        <p className='about__techs-text' style={{ color: primaryColor }}>Git</p>
                    </div>

                </div>
            </div>



            <div className='about__section about__columns'>
                <div className='about__subsection'>
                    <h2
                        className='about__section-title' style={{ color: primaryColor }}>
                        Навыки
                    </h2>
                    <div className='about__skills-content'>
                        <div className='about__skill'>
                            <svg className='about__skill-icon' viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 2V12H9V8C9 7.46957 9.21071 6.96086 9.58579 6.58579C9.96086 6.21071 10.4696 6 11 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V12H20V2H4ZM0 16V14H4C3.46957 14 2.96086 13.7893 2.58579 13.4142C2.21071 13.0391 2 12.5304 2 12V2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0H20C20.5304 0 21.0391 0.210714 21.4142 0.585786C21.7893 0.960859 22 1.46957 22 2V12C22 12.5304 21.7893 13.0391 21.4142 13.4142C21.0391 13.7893 20.5304 14 20 14H24V16H18C18 17.11 17.1 18 16 18H11C10.4696 18 9.96086 17.7893 9.58579 17.4142C9.21071 17.0391 9 16.5304 9 16H0ZM11.5 16C11.3674 16 11.2402 16.0527 11.1464 16.1464C11.0527 16.2402 11 16.3674 11 16.5C11 16.6326 11.0527 16.7598 11.1464 16.8536C11.2402 16.9473 11.3674 17 11.5 17C11.6326 17 11.7598 16.9473 11.8536 16.8536C11.9473 16.7598 12 16.6326 12 16.5C12 16.3674 11.9473 16.2402 11.8536 16.1464C11.7598 16.0527 11.6326 16 11.5 16ZM15.5 16C15.3674 16 15.2402 16.0527 15.1464 16.1464C15.0527 16.2402 15 16.3674 15 16.5C15 16.6326 15.0527 16.7598 15.1464 16.8536C15.2402 16.9473 15.3674 17 15.5 17C15.6326 17 15.7598 16.9473 15.8536 16.8536C15.9473 16.7598 16 16.6326 16 16.5C16 16.3674 15.9473 16.2402 15.8536 16.1464C15.7598 16.0527 15.6326 16 15.5 16ZM13 16V17H14V16H13ZM11 8V15H16V8H11Z" fill={accentColor} />
                            </svg>
                            <p className='about__skill-text' style={{ color: primaryColor }}>Адаптивная вёрстка</p>
                        </div>
                        <div className='about__skill'>
                            <svg className='about__skill-icon' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.04 0L17 4.97L15.57 6.38L10.62 1.43L12.04 0ZM0 16.28L6.5 9.81C6.4 9.5 6.47 9.11 6.73 8.85C7.12 8.46 7.76 8.46 8.15 8.85C8.54 9.25 8.54 9.88 8.15 10.27C7.89 10.53 7.5 10.6 7.19 10.5L0.72 17L11.33 13.45L14.86 7.09L9.92 2.14L3.55 5.67L0 16.28Z" fill={accentColor} />
                            </svg>
                            <p className='about__skill-text' style={{ color: primaryColor }}>Pixel Perfect</p>
                        </div>
                        <div className='about__skill'>
                            <svg className='about__skill-icon' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 0C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2ZM2 2H16V16H2V2ZM4 5V12.9062H5.67383V10.1152H6.78906C7.99806 10.1152 9.30273 9.46452 9.30273 7.60352C9.30273 7.13952 9.02227 5 6.69727 5H4ZM5.67383 6.30273H6.78906C7.44006 6.30273 7.7207 6.95252 7.7207 7.60352C7.7207 8.25452 7.53306 8.8125 6.78906 8.8125H5.67383V6.30273ZM12.1699 6.95312C11.4259 6.95312 10.123 7.3257 10.123 8.7207C10.123 10.5807 12.8203 10.4882 12.8203 11.3262C12.8203 11.6982 12.5419 11.8848 12.1699 11.8848C11.9839 11.8848 11.4258 11.7909 11.4258 11.0469H9.9375C9.9375 11.9769 10.6829 13 12.1719 13C12.9159 13 14.3105 12.7212 14.3105 11.3262C14.3105 9.27917 11.6133 9.55991 11.6133 8.62891C11.6133 8.25691 11.8929 8.07031 12.1719 8.07031C12.5439 8.07031 12.7285 8.34945 12.7285 8.81445H14.3105C14.3105 7.79145 13.5659 6.95312 12.1699 6.95312Z" fill={accentColor} />
                            </svg>
                            <p className='about__skill-text' style={{ color: primaryColor }}>Adobe Photoshop</p>
                        </div>
                        <div className='about__skill'>
                            <svg className='about__skill-icon' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="16" height="16" rx="2" stroke={accentColor} strokeWidth="2" />
                                <path d="M7 15C8.104 15 9 14.104 9 13V11H7C5.896 11 5 11.896 5 13C5 14.104 5.896 15 7 15Z" fill={accentColor} />
                                <path d="M5 9C5 7.896 5.896 7 7 7H9V11H7C5.896 11 5 10.104 5 9Z" fill={accentColor} />
                                <path d="M5 5C5 3.896 5.896 3 7 3H9V7H7C5.896 7 5 6.104 5 5Z" fill={accentColor} />
                                <path d="M9 3H11C12.104 3 13 3.896 13 5C13 6.104 12.104 7 11 7H9V3Z" fill={accentColor} />
                                <path d="M13 9C13 10.104 12.104 11 11 11C9.896 11 9 10.104 9 9C9 7.896 9.896 7 11 7C12.104 7 13 7.896 13 9Z" fill={accentColor} />
                            </svg>

                            <p className='about__skill-text' style={{ color: primaryColor }}>Figma</p>
                        </div>

                    </div>
                </div>

                <div className='about__subsection'>
                    <h2
                        className='about__section-title' style={{ color: primaryColor }}>
                        Языки
                    </h2>
                    <div className='about__languages-content'>
                        <div className='about__language'>
                            <p className='about__language-name' style={{ color: primaryColor }}><img className="about__language-flag" alt='ru' src={ru} /> Русский</p>
                            <p className='about__language-level' style={{ color: primaryColor }}>Родной</p>
                        </div>
                        <div className='about__language'>
                            <p className='about__language-name' style={{ color: primaryColor }}><img className="about__language-flag" alt='en' src={en} /> Английский</p>
                            <p className='about__language-level' style={{ color: primaryColor }}>Свободно владею</p>
                        </div>
                        <div className='about__language'>
                            <p className='about__language-name' style={{ color: primaryColor }}><img className="about__language-flag" alt='de' src={de} /> Немецкий</p>
                            <p className='about__language-level' style={{ color: primaryColor }}>Базовые знания</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
