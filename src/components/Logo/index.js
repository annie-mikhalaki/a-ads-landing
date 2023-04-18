import React from 'react'
import classes from './logo.module.css'

const Logo = props => {
    return (
        <div className={classes.logo}>
            <svg width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.heigth}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M58.1681 25.3144C56.8588 25.3144 56.2287 23.9884 56.7465 22.7858L62.8366 8.6429C63.287 7.59702 64.3165 6.91943 65.4552 6.91943C66.5917 6.91943 67.6196 7.5944 68.0714 8.63725L74.1491 22.6679C74.6779 23.8887 73.817 25.2601 72.4876 25.3144C71.573 25.2453 70.775 24.6678 70.4235 23.8206L69.3071 21.1303H61.4933L60.4331 23.7313C60.0332 24.7125 59.2278 25.3144 58.1681 25.3144ZM62.9453 17.6033H67.8553L66.2622 13.3339C65.9645 12.536 64.836 12.536 64.5383 13.3339L62.9453 17.6033ZM86.261 25.2017C85.0727 25.2017 84.2734 23.9844 84.7457 22.894L90.9205 8.63927C91.3728 7.59519 92.4019 6.91943 93.5397 6.91943C94.6776 6.91943 95.7067 7.59519 96.159 8.63927L102.255 22.7114C102.764 23.888 101.899 25.2817 100.619 25.2017C99.6895 25.2017 98.851 24.6418 98.4945 23.7828L97.3938 21.1303H89.58L88.5152 23.6965C88.137 24.6078 87.2475 25.2017 86.261 25.2017ZM91.0312 17.6033H95.9412L94.3482 13.3339C94.0505 12.536 92.922 12.536 92.6243 13.3339L91.0312 17.6033ZM109.526 25.2009C107.493 25.2009 105.846 23.5534 105.846 21.5209V10.7283C105.846 8.69593 107.493 7.04834 109.526 7.04834H113.052C118.86 7.04834 122.473 10.9641 122.473 16.1246C122.473 21.2333 118.86 25.2009 113.052 25.2009H109.526ZM109.912 20.677C109.912 21.1851 110.324 21.597 110.832 21.597H113.053C116.38 21.597 118.224 19.3927 118.224 16.1253C118.224 12.9097 116.38 10.6536 113.053 10.6536H110.832C110.324 10.6536 109.912 11.0655 109.912 11.5736V20.677ZM133.215 25.4608C137.201 25.4608 140 23.4381 140 19.8335C140 16.6179 137.888 15.2953 134.139 14.3358C130.945 13.5319 130.153 13.143 130.153 11.9501C130.153 11.0165 131.217 10.244 132.46 10.244C133.702 10.244 135.961 11.0952 136.849 11.4227C137.737 11.7502 138.913 11.8039 139.382 11.0239C139.852 10.244 139.784 9.38561 139.068 8.72706C138.352 8.06852 135.274 6.78955 132.582 6.78955C128.807 6.78955 126.114 8.96786 126.114 12.2613C126.114 15.9177 128.517 16.9291 132.239 17.8626C135.327 18.6406 135.961 19.1593 135.961 20.1706C135.961 21.2857 134.878 22.1236 133.215 22.1236C131.104 22.1236 128.809 20.5468 128.142 20.204C127.475 19.8611 126.379 19.7793 125.739 20.64C125.099 21.5007 125.584 22.5505 126.206 23.1252C126.827 23.6999 129.533 25.4608 133.215 25.4608Z" fill="#343240"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M79.6683 17.5804C80.7061 17.5804 81.5475 16.7445 81.5475 15.7133C81.5475 14.6821 80.7061 13.8462 79.6683 13.8462C78.6304 13.8462 77.7891 14.6821 77.7891 15.7133C77.7891 16.7445 78.6304 17.5804 79.6683 17.5804Z" fill="#03A9F4"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.49489 28.3525C6.92451 29.1966 7.58158 29.9166 8.41556 30.4628C9.30007 31.0586 10.2604 31.5055 11.246 31.8035C12.2569 32.1014 13.3183 32.2503 14.3797 32.2503C15.7697 32.2503 17.1596 31.9772 18.4232 31.4559C19.4847 31.0338 20.4703 30.438 21.3548 29.6932C22.2393 30.438 23.2249 31.0338 24.2611 31.4559C25.5499 31.9772 26.9399 32.2503 28.3298 32.2503C29.3913 32.2503 30.4274 32.1014 31.4383 31.8035C32.4492 31.5055 33.4095 31.0586 34.294 30.4628C35.128 29.9166 35.7851 29.1966 36.2147 28.3525C36.6696 27.5332 36.9223 26.5898 36.9223 25.6215C36.9223 24.5043 36.619 23.4616 36.0378 22.5678C35.4818 21.6492 34.6478 20.9044 33.6622 20.4078C33.2831 20.2092 32.8283 20.3582 32.6513 20.7306C32.4997 21.0037 32.5503 21.3264 32.7524 21.5499C32.8535 21.674 32.9293 21.823 32.9799 21.9719C33.0557 22.1209 33.081 22.2947 33.081 22.4685C33.081 22.8905 32.9041 23.2629 32.6261 23.536C32.3481 23.8091 31.969 23.9829 31.5394 23.9829C31.3625 23.9829 31.1856 23.9333 31.0087 23.8836C30.857 23.834 30.7054 23.7347 30.5538 23.6105C29.7198 22.9402 28.8353 22.3692 27.875 21.8975C27.319 21.6492 26.763 21.4257 26.207 21.252C26.7377 20.6561 27.1926 19.961 27.4959 19.1913C28.254 19.1417 28.9616 18.8189 29.4924 18.2975C30.0483 17.7265 30.4021 16.9569 30.4021 16.0879C30.4021 15.2438 30.0483 14.4742 29.4924 13.9032C28.9111 13.3321 28.1277 12.9845 27.2432 12.9845L26.6872 10.4274C27.7233 11.1722 28.9869 11.6191 30.3516 11.6191H35.0269C36.5432 11.6191 37.9332 11.0977 38.9946 10.1791C40.056 9.28532 40.8142 8.01914 41.0669 6.57917L41.6229 2.97925C41.6482 2.97925 41.6482 2.95442 41.6482 2.92959V2.90477C41.8756 2.83028 42.1031 2.70615 42.28 2.53236C42.5327 2.25926 42.7096 1.88686 42.7096 1.48962C42.7096 1.11722 42.5579 0.769639 42.3305 0.496541L42.28 0.446887C42.002 0.173789 41.6229 0 41.2185 0H41.1933H39.0452H26.1565H26.1312C25.3983 0 24.7665 0.297925 24.2863 0.769639C24.2105 0.84412 24.1094 0.943428 24.0336 1.04274C23.7556 0.893774 23.4524 0.769639 23.1491 0.67033C22.5678 0.496541 21.9613 0.397233 21.3548 0.397233C20.7483 0.397233 20.1417 0.496541 19.5605 0.67033C19.2572 0.769639 18.954 0.893774 18.676 1.04274C18.6001 0.943428 18.4991 0.84412 18.4232 0.769639C17.9431 0.297925 17.3113 0 16.5784 0H16.5531H3.66443H1.49104C1.08669 0 0.707614 0.173789 0.429623 0.446887C0.414004 0.446887 0.408038 0.45637 0.399794 0.469475L0.399793 0.469476C0.394698 0.477575 0.388732 0.487058 0.379079 0.496541C0.151632 0.769639 0 1.11722 0 1.48962C0 1.88686 0.151632 2.25926 0.429623 2.53236C0.606527 2.70615 0.808702 2.83028 1.06142 2.90477V2.92959V2.97925L1.64268 6.57917C1.8954 8.01914 2.62828 9.28532 3.71498 10.1791C4.7764 11.0977 6.16635 11.6191 7.68267 11.6191H12.358C13.7227 11.6191 14.9863 11.1722 16.0224 10.4274L15.4664 12.9845C14.6072 12.9845 13.849 13.3073 13.2678 13.8535L13.2172 13.9032C12.636 14.4742 12.2822 15.2438 12.2822 16.0879C12.2822 16.9569 12.636 17.7265 13.2172 18.2975C13.7479 18.8189 14.4303 19.1417 15.2137 19.1913C15.517 19.961 15.9466 20.6561 16.5026 21.252C15.9466 21.4257 15.3906 21.6492 14.8346 21.8975C13.8743 22.3692 12.9645 22.9402 12.1558 23.6105C12.0042 23.7347 11.8525 23.834 11.7009 23.8836C11.524 23.9333 11.3471 23.9829 11.1702 23.9829C10.7406 23.9829 10.3615 23.8091 10.0835 23.536C9.80551 23.2629 9.62861 22.8905 9.62861 22.4685C9.62861 22.2947 9.65388 22.1209 9.7297 21.9719C9.78024 21.823 9.85606 21.674 9.95715 21.5499C10.1593 21.3264 10.2099 21.0037 10.0582 20.7306C9.88133 20.3582 9.42643 20.2092 9.04736 20.4078C8.03648 20.9044 7.22778 21.6492 6.67179 22.5678C6.09054 23.4616 5.78727 24.5043 5.78727 25.6215C5.78727 26.5898 6.03999 27.5332 6.49489 28.3525ZM23.0231 3.37571C23.478 3.74812 23.8065 4.21983 23.9329 4.81568L24.0087 5.16326L24.034 5.18808L24.3878 6.90115V6.92598L25.9041 13.952C25.9799 14.3493 26.3843 14.6224 26.7886 14.5231H26.8644C26.8928 14.5091 26.9212 14.503 26.954 14.4959C26.9797 14.4904 27.0081 14.4843 27.0413 14.4734H27.2435C27.6984 14.4734 28.128 14.6472 28.4313 14.9451C28.7093 15.243 28.9114 15.6403 28.9114 16.0872C28.9114 16.5589 28.7093 16.9561 28.4313 17.254C28.2797 17.403 28.0775 17.5271 27.8753 17.6016C27.9006 17.3782 27.9258 17.1299 27.9258 16.8816C27.9258 16.4844 27.5973 16.1368 27.1677 16.1368C26.7633 16.1368 26.4095 16.4844 26.4095 16.8816C26.4095 17.3533 26.359 17.8002 26.2326 18.2223C26.2326 18.2328 26.2326 18.2389 26.2307 18.2442C26.2281 18.2516 26.2219 18.2576 26.2074 18.2719C25.9799 19.0912 25.525 19.8112 24.9438 20.4071C24.034 21.3008 22.7704 21.847 21.3804 21.847H21.3551H21.3299C19.9399 21.847 18.6763 21.3008 17.7665 20.4071C17.1853 19.8112 16.7304 19.0912 16.5029 18.2719C16.4883 18.2576 16.4822 18.2516 16.4796 18.2442C16.4777 18.2389 16.4777 18.2328 16.4777 18.2223C16.3513 17.8002 16.3008 17.3533 16.3008 16.8816C16.3008 16.4844 15.9469 16.1368 15.5426 16.1368C15.113 16.1368 14.7844 16.4844 14.7844 16.8816C14.7844 17.1299 14.8097 17.3782 14.835 17.6016C14.6328 17.5271 14.4306 17.403 14.279 17.254C13.9757 16.9561 13.7988 16.5589 13.7988 16.0872C13.7988 15.6403 13.9757 15.243 14.279 14.9451C14.2916 14.9451 14.2979 14.9389 14.3043 14.9327C14.3106 14.9265 14.3169 14.9203 14.3295 14.9203C14.6075 14.6472 15.0119 14.4734 15.4668 14.4734H15.669C15.6942 14.4858 15.7258 14.492 15.7574 14.4982C15.789 14.5044 15.8206 14.5106 15.8459 14.5231H15.9217C16.326 14.6224 16.7304 14.3493 16.8062 13.952L18.2972 6.92598H18.3225V6.90115L18.6763 5.18808V5.16326L18.7774 4.81568C18.9038 4.21983 19.2323 3.74812 19.6872 3.37571C20.1421 3.02813 20.7233 2.80469 21.3551 2.80469C21.9869 2.80469 22.5682 3.02813 23.0231 3.37571ZM25.8535 6.60412H25.8788C26.1062 7.64686 26.6875 8.5158 27.4709 9.16131C28.2543 9.78198 29.2652 10.1544 30.3519 10.1544H35.0272C36.1645 10.1544 37.2006 9.73233 38.0093 9.062C38.818 8.39167 39.3993 7.42341 39.5762 6.33102L40.1574 2.75593V2.7311V2.65662V2.58214C40.1574 2.28421 40.0311 2.01111 39.8289 1.8125C39.6267 1.61388 39.3487 1.48975 39.0455 1.48975H26.1568C25.8282 1.48975 25.5502 1.61388 25.3481 1.8125C25.1459 2.01111 25.0195 2.28421 25.0195 2.58214C25.0195 2.63179 25.0195 2.68144 25.0448 2.70627V2.78075V2.80558L25.4997 4.86623V4.89105L25.8535 6.60412ZM17.2105 4.89105L16.8314 6.60412C16.6039 7.64686 16.0227 8.5158 15.2392 9.16131C14.4305 9.78198 13.4449 10.1544 12.3582 10.1544H7.68294C6.5457 10.1544 5.48428 9.73233 4.70085 9.062C3.89215 8.39167 3.31089 7.42341 3.13399 6.33102L2.55273 2.75593V2.7311V2.65662V2.58214C2.55273 2.28421 2.67909 2.01111 2.88127 1.8125C3.08345 1.61388 3.36144 1.48975 3.6647 1.48975H16.5534C16.8819 1.48975 17.1599 1.61388 17.3621 1.8125C17.5643 2.01111 17.6906 2.28421 17.6906 2.58214C17.6906 2.61122 17.682 2.64031 17.6748 2.66441C17.6697 2.68144 17.6654 2.69599 17.6654 2.70627V2.78075V2.80558L17.2105 4.86623V4.89105Z" fill="#03A9F4"/>
            </svg>
        </div>
    )
}

export default Logo
