
import React from 'react';
import { UndrawSVGProps } from '../types';

const ProfilePic: React.FC<UndrawSVGProps> = ({ color = '#6D07E8', size = 300, style }) => (
    <svg {...{ style }} xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 532 532" xmlnsXlink="http://www.w3.org/1999/xlink"><g><polygon points="297.05536 387.22083 309.71625 308.09024 224.2552 273.27277 211.59431 393.55127 297.05536 387.22083" fill="#a0616a"/><path d="M382.94672,504.16492c-7.33743,3.57727-14.81442,6.80649-22.40332,9.67133-15.17813,5.74329-30.84525,10.07666-46.91769,12.97015-15.70908,2.83618-31.83749,4.27606-47.96591,4.27606-21.78879,0-43.45168-2.61371-64.40176-7.7851-8.20377-2.01178-16.47781-4.47125-24.61163-7.3374-.85269-.30707-1.71902-.6142-2.57172-.92267-10.09067-3.66052-20.01379-7.9516-29.5592-12.80093-1.28603-.64285-2.57172-1.30069-3.85741-1.99951-1.42558-.7261-2.83717-1.49451-4.26276-2.29156-1.81696-.99225-3.61992-2.02679-5.4229-3.07501-6.03741-3.49402-11.97723-7.26782-17.65159-11.19449l-.37738-.25113c-.33541-.23749-.67082-.46133-.99225-.69879,.2095-1.10416,.40536-2.11142,.58689-3.0054,.6988-3.50766,1.16012-5.43619,1.16012-5.43619l38.26627-79.04932,10.66391-22.02594,5.19905-2.13873,39.27284-16.14206h95.98743l30.28601,12.52249s.1539,.57324,.46133,1.6774c3.01871,10.83145,20.62866,72.32608,47.95193,132.49271,.37704,.83801,.76874,1.69104,1.15979,2.54407l-.00006,.00003Z" fill={color}/><circle cx="275.45874" cy="246.37804" r="87.14982" fill="#a0616a"/><path d="M167.97998,370.32001l-.14996,.75-26.57001,126.32996-.22998,1.10004-.37006,1.73999c-1.42999-.72998-2.83997-1.5-4.25995-2.28998-1.82001-1-3.62-2.03003-5.43005-3.08002-6.02997-3.48999-11.96997-7.27002-17.64996-11.19l-.38-.26001c-.33002-.22998-.66998-.46002-.98999-.69-4.34003-3.02997-8.57001-6.19-12.70001-9.45001-.03003-.01996-.04999-.03998-.08002-.07001-7.37-5.94-14.46997-12.32996-21.26001-19.12-4.37994-4.38-8.58997-8.88995-12.62-13.51996l.61005-2.56,.06-.26001,.75995-3.26001c6.76001-28.54999,29.63-50.46002,58.44-55.97998l38.28003-7.33002,4.53998-.85999Z" fill={color}/><path d="M439.39618,467.22528c-11.27878,9.60172-23.36792,18.29581-36.12823,25.92667-1.24371,.75476-2.51575,1.49451-3.78745,2.23563-5.42255,3.13095-10.94336,6.05173-16.53378,8.77734-7.33743,3.57727-14.81442,6.80649-22.40332,9.67133l-.58722-2.76791-30.00653-142.6813,3.88538,.74112,38.93744,7.46298c28.80444,5.52081,51.68341,27.43481,58.43362,55.98746l7.44934,31.5444,.74078,3.10229h-.00003Z" fill={color}/><path d="M375.81912,269.67435c-2.26428,8.44159-13.65463,46.16327-42.82281,54.10123-5.72998,1.56549-19.39859,3.36844-15.77869,0,.82437-.7684,1.62109-1.52316,2.41782-2.26428,31.65561-29.76871,44.56949-47.96487,38.67163-88.35622-3.74582-25.71648-46.40042-49.07042-70.39752-51.39066-10.11865-.97723-23.0325,2.44582-31.55768,11.26546-14.07397,14.53429-11.75407,59.14709-19.55247,85.3522-2.09641,7.01532-4.90561,12.71765-8.94489,16.16937-2.51576,2.15237-4.12286-.58688-5.31097-5.07315-2.5294-9.5321-3.18623-26.98715-6.77818-22.0546-10.38411,14.29816-.4893,33.24908,2.50177,40.5592,.61485,1.49588,1.24371,2.93442,1.87257,4.30472v.01364c.36339,.78207,.74077,1.56549,1.10416,2.30658v.01364c9.97874,20.34854,21.97031,27.63,32.53629,40.30673,4.15086,4.96124,8.0782,10.73315,11.5862,18.44867,2.40384,5.28333,4.13687,10.59396,5.32495,15.8063,6.05139,26.1355-1.13214,49.88113-3.07501,56.33823-4.06689,13.44513-11.05493,36.54657-31.55769,49.5863-25.74413,16.38092-49.23761,1.94354-60.47441,17.49872-.13989,.18152-.26579,.36304-.39137,.54456-.41936,.62921-.79672,1.25836-1.11815,1.88623-10.09067-3.66052-20.01379-7.9516-29.5592-12.80093-1.28603-.64285-2.57172-1.30069-3.85741-1.99951-1.42558-.7261-2.83717-1.49451-4.26276-2.29156-.05595-1.09052-.11192-2.17966-.15388-3.28384-.82437-18.90997,.41936-39.69254,5.12944-60.41913,3.01871-13.23492,6.00977-26.35931,10.59361-39.00739,2.99107-8.24506,6.6526-16.2963,11.47427-24.05273,3.85776-6.23325,8.44159-12.285,14.00403-18.09927,12.21539-12.75998,23.07481-18.08426,24.79384-31.55804,2.45946-19.23071-17.56799-25.0163-24.79384-54.10123-4.93324-19.88721-10.09067-48.55177-5.08713-67.86711,4.72408-18.25212,8.83296-34.0871,22.54355-49.60133,3.29816-3.71785,30.36993-29.57355,61.73212-33.82232,14.45102-1.94218,27.33725,16.56245,44.80731,20.54507,20.0834,4.57088,31.58566,7.18456,42.82248,15.77902,18.99359,14.50697,24.34616,36.19852,29.30774,56.35188,3.88538,15.76537,8.9169,36.1562,2.25027,60.86543l.00003,.00012Z" fill="#2f2e41"/></g><path d="M454.09003,77.90997C403.84998,27.66998,337.04999,0,266,0S128.15002,27.66998,77.90997,77.90997C27.66998,128.14996,0,194.95001,0,266c0,64.84998,23.04999,126.15997,65.28998,174.57001,4.03003,4.63,8.24005,9.13995,12.62,13.51996,6.79004,6.79004,13.89001,13.17999,21.26001,19.12,.03003,.03003,.04999,.05005,.08002,.07001,47.10999,38.04999,105.34002,58.72003,166.74999,58.72003,71.04999,0,137.84998-27.67004,188.09003-77.91003,50.23999-50.23999,77.90997-117.03998,77.90997-188.08997s-27.66998-137.85004-77.90997-188.09003Zm-15.15002,387.39001c-17.07001,14.84998-36.07001,27.52997-56.56,37.63-7.19,3.54999-14.56,6.77997-22.09998,9.66998-29.29004,11.23999-61.08002,17.40002-94.28003,17.40002-32.03998,0-62.76001-5.73999-91.19-16.23999-11.66998-4.30005-22.95001-9.41003-33.77997-15.26001-1.59003-.85999-3.17004-1.73004-4.74005-2.62-8.25995-4.67999-16.25-9.79004-23.91998-15.31-17.14001-12.30005-32.75-26.60004-46.46997-42.56C26.09003,391.76996,2,331.64996,2,266,2,120.42999,120.42999,2,266,2s264,118.42999,264,264c0,79.47998-35.29999,150.87-91.06,199.29999Z" fill="#3f3d56"/></svg>
);

export default ProfilePic;
