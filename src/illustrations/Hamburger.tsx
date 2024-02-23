
import React from 'react';
import { UndrawSVGProps } from '../types';

const Hamburger: React.FC<UndrawSVGProps> = ({ color = '#6D07E8', size = 300, style }) => (
    <svg {...{ style }} xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 427.47163 399.61396" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M149.45557,135.61396H28.21143c-15.55566,0-28.21143-12.65527-28.21143-28.21094V37.8249C0,22.26924,12.65576,9.61396,28.21143,9.61396h121.24414c15.55566,0,28.21143,12.65527,28.21143,28.21094V107.40302c0,15.55566-12.65576,28.21094-28.21143,28.21094ZM28.21143,11.61396C13.7583,11.61396,2,23.37226,2,37.8249V107.40302c0,14.45312,11.7583,26.21094,26.21143,26.21094h121.24414c14.45312,0,26.21143-11.75781,26.21143-26.21094V37.8249c0-14.45264-11.7583-26.21094-26.21143-26.21094H28.21143Z" fill="#3f3d56"/><g><path d="M90.19807,173.93877c-7.91992,0-14.36328-6.44336-14.36328-14.36377,0-7.91992,6.44336-14.36328,14.36328-14.36328,7.92041,0,14.36377,6.44336,14.36377,14.36328,0,7.92041-6.44336,14.36377-14.36377,14.36377Zm0-26.72705c-6.81689,0-12.36328,5.54639-12.36328,12.36328,0,6.81738,5.54639,12.36377,12.36328,12.36377,6.81738,0,12.36377-5.54639,12.36377-12.36377,0-6.81689-5.54639-12.36328-12.36377-12.36328Z" fill="#3f3d56"/><path d="M87.31911,166.19551c-.27246,0-.54395-.11084-.74121-.32861-.37109-.40967-.33984-1.04199,.07031-1.4126l5.54883-5.02441-5.02344-5.54883c-.37109-.40918-.33887-1.0415,.07031-1.41211s1.04199-.33936,1.41211,.07031l5.69434,6.29004c.37109,.40918,.33984,1.0415-.07031,1.41211l-6.29004,5.69531c-.19141,.17334-.43164,.25879-.6709,.25879Z" fill="#3f3d56"/></g><path d="M301.3335,263.61396l-18,56-4,70,40,5,29-71,3,76,52-5s16-97-7-139l-95,8Z" fill="#2f2e41"/><path d="M341.3335,72.61396l35-3,6,9s34,21,35,25-22,152-21,152-29,17-65,20-37.08268,1.91732-37.08268,1.91732l15.08268-36.91732,3.5-46.5-3-88,27-20,4.5-13.5Z" fill={color}/><g><circle cx="355.76173" cy="37.28943" r="30.48187" fill="#ffb6b6"/><path d="M378.14903,62.33463c1.67901,.28627,3.6501-3.78344,5.53365-7.74711,3.94306-8.29736,6.44962-13.57203,6.64038-21.02786,.16259-6.35451-1.60281-4.68671-3.32019-18.8144-.5664-4.65969-8.5271-4.65072-10.14734-6.86337-2.73683-3.73751-10.71285-4.02272-17.52204-6.26793-12.75414-4.20536-6.34637,1.07132-14.44616,1.63415-.20468,.01424-4.22008,3.94108-6.46266,4.14414-3.92904,.35576-3.09118-3.77829-5.09118,1.22171-2.25829,5.64574-10.99682,3.29483-8.87321,5.31901,1.80303,1.71859,1.87321,2.68099,1.87321,2.68099,0,0-9.60059,5.47729-6,6,2.14069,.31079-5.14156-5.74427-6.23171-2.88221-.69519,1.8252,12.05514,17.41504,11,20-1.10353,2.70352,6-4,4-13-1.43139-6.44126,2.23171-1.11779,24.20196,3.13161,2.67311,.51702,4.87025-2.50186,7.13762-4.05081,.62463-.42678,.03459,.25385,2.21346,5.53365,2.74798,6.65902,3.36815,7.01973,3.32019,8.85384-.10382,3.97028-3.08485,5.13929-2.21346,7.74711,.70576,2.11213,3.4638,3.74724,5.53365,3.32019,2.33572-.48203,2.73616-3.37153,4.42692-3.32019,1.44826,.04404,3.16705,2.22535,3.32019,4.42692,.32255,4.63808-6.54385,5.91368-7.74711,12.17402-.67907,3.5331,7.31087-2.4765,8.85384-2.21346Z" fill="#2f2e41"/></g><g><path d="M298.52399,79.53379c.94035,1.90722,2.87816,3.18069,4.92711,3.74953s4.21682,.51392,6.33614,.34003c6.57834-.53973,13.06396-2.19264,19.09819-4.86731,2.48517-1.10155,4.95263-2.41986,6.75108-4.45826s2.82712-4.93255,2.04273-7.53529c-12.85044,5.08207-26.04595,9.29139-39.46552,12.58937" fill="#3f3d56"/><path d="M292.08818,67.38918c.14218,2.48955,.29459,5.03011,1.15996,7.38811s2.58382,4.54446,4.83796,5.22481c1.58559,.47856,3.23217,.17325,4.81225-.13487,10.89871-2.12529,21.99836-4.32517,31.5763-9.99009,1.86648-1.10394,3.76747-2.4645,4.53583-4.61657,.76936-2.15489,.24341-4.64051-.28926-6.95567-.42356-1.84092-1.15224-4.02926-2.85881-4.49226-.98868-.26823-1.97372,.16964-2.87771,.59163-12.97239,6.05567-26.61875,10.59215-40.63778,13.50928" fill={color}/><path d="M319.85544,61.05073l3.99408,1.74761c2.48455,1.08711,5.37738-.11279,6.3553-2.64232,.67857-1.75521,1.52098-3.4471,2.51501-5.04497-4.05259,2.53826-8.43615,4.54742-13.00447,5.96048" fill="#e6e6e6"/><path d="M294.18366,69.38256l3.82697,1.67449c2.49801,1.093,5.39717-.11703,6.38977-2.65661,.66031-1.68942,1.4752-3.31842,2.43334-4.8586-3.98508,2.49597-8.29561,4.47167-12.78782,5.86118" fill="#e6e6e6"/><path d="M300.02467,66.61082h.00002c8.45429,3.69917,18.32846,.24991,22.64456-7.90669,.62388-1.17901,1.28872-2.33634,1.99335-3.469-7.76154,4.86128-16.15694,8.70924-24.9062,11.41553" fill="#e6e6e6"/><path d="M293.82827,65.97146c-.97912,.36858-1.33238,1.71583-.85017,2.64427s1.57034,1.42258,2.61613,1.45134,2.06133-.33427,3.02029-.7525c1.93712-.84484,3.75742-1.93184,5.57164-3.0157l14.80841-8.84689c.52927-.3162,1.1048-.69251,1.25235-1.29112,.21243-.86182-.65433-1.68663-1.5379-1.77124s-1.72818,.34045-2.50601,.76805c-5.10445,2.80614-9.87222,6.26942-15.26236,8.47766-2.3602,.96693-4.82262,1.68411-7.3329,2.13572" fill="#ff6884"/><path d="M308.61148,58.94759c-1.02237,.22517-1.494,2.03395-1.08442,3.5022s1.46929,2.50378,2.52554,2.86429,2.11501,.15436,3.12118-.14761c2.03247-.60999,3.96719-1.60021,5.89549-2.58781l15.73952-8.06117c.56255-.28812,1.17701-.64762,1.37704-1.45417,.28798-1.16119-.51966-2.59953-1.40696-2.98992s-1.77828-.04376-2.60188,.3269c-5.40481,2.43243-10.5244,5.90266-16.16781,7.39715-2.4711,.6544-5.02455,.92224-7.60397,.79762" fill="#ff6884"/><path d="M336.4084,52.13033c-13.23549,3.45009-26.00743,8.60949-37.95031,15.33054-.98615,.55497-1.97938,1.12582-3.07215,1.41115s-2.31583,.25807-3.32662-.33999c-1.58969-.94058-2.27283-3.09761-2.03346-4.96086s1.21612-3.48903,2.24477-4.98972c3.33792-4.86963,7.5221-9.13711,12.52605-12.02291,5.00395-2.8858,10.85738-4.33918,16.6474-3.61081s11.477,3.73707,15.2414,8.58063" fill="#3f3d56"/></g><g><path d="M62.94082,99.18634c1.49783,3.03791,4.58448,5.06637,7.84814,5.97244s6.71676,.81859,10.09252,.54162c10.4783-.85971,20.80892-3.49254,30.42055-7.75289,3.95851-1.75461,7.88879-3.85447,10.75345-7.10134,2.86466-3.24687,4.50318-7.85681,3.25377-12.00258-20.46883,8.09497-41.48729,14.79979-62.86264,20.05297" fill="#3f3d56"/><path d="M52.68954,79.8418c.22647,3.96548,.46924,8.01221,1.84764,11.76815s4.11564,7.23865,7.70615,8.32234c2.52561,.76228,5.14837,.27596,7.66519-.21483,17.36001-3.38527,35.04008-6.88934,50.2963-15.9127,2.97303-1.75841,6.00102-3.92557,7.2249-7.35351,1.22548-3.43241,.38771-7.39164-.46075-11.07934-.67467-2.93231-1.83535-6.41801-4.55366-7.15549-1.57481-.42724-3.14384,.2702-4.58375,.94237-20.66307,9.64576-42.39967,16.8717-64.72987,21.51825" fill={color}/><path d="M96.91861,69.7456l6.36197,2.78367c3.95752,1.73161,8.56536-.17966,10.12304-4.20881,1.08086-2.79579,2.4227-5.49071,4.00603-8.03588-6.45517,4.04307-13.43752,7.24336-20.71417,9.49414" fill="#e6e6e6"/><path d="M56.02733,83.01696l6.09579,2.66721c3.97896,1.74099,8.59688-.18642,10.17794-4.23158,1.05178-2.69098,2.34977-5.28575,3.87594-7.73903-6.34763,3.97571-13.21366,7.12269-20.36908,9.33598" fill="#e6e6e6"/><path d="M65.33118,78.60199h.00003c13.46642,5.89223,29.19448,.39807,36.06938-12.59417,.99375-1.87799,2.05274-3.72144,3.1751-5.5256-12.36296,7.7433-25.73558,13.87251-39.67184,18.18322" fill="#e6e6e6"/><path d="M55.46124,77.5836c-1.55958,.58709-2.12228,2.73306-1.3542,4.21192s2.50131,2.26595,4.16711,2.31177,3.28339-.53244,4.81087-1.19862c3.08553-1.3457,5.985-3.07713,8.87479-4.80356l23.58757-14.09176c.84305-.50366,1.75978-1.10306,1.99481-2.05656,.33837-1.37275-1.04225-2.68655-2.44965-2.82132s-2.75274,.54228-3.9917,1.22339c-8.13062,4.46976-15.72497,9.98625-24.31064,13.50364-3.75944,1.54017-7.68171,2.68254-11.68021,3.40188" fill="#ff6884"/><path d="M79.00868,66.39562c-1.62848,.35867-2.37971,3.23978-1.72732,5.57848s2.34037,3.98815,4.02281,4.56239,3.3689,.24587,4.97157-.23512c3.23743-.97162,6.31913-2.54889,9.39062-4.12198l25.07068-12.84023c.89606-.45893,1.87481-1.03156,2.19342-2.31628,.45871-1.84961-.82774-4.14065-2.24107-4.76249s-2.83254-.0697-4.1444,.5207c-8.60905,3.8745-16.76379,9.40205-25.75289,11.78255-3.93609,1.04236-8.00335,1.46899-12.11199,1.2705" fill="#ff6884"/><path d="M123.28499,55.53676c-21.08215,5.49548-41.42593,13.71363-60.44914,24.41925-1.57079,.88399-3.15286,1.79326-4.89347,2.24774s-3.68876,.41107-5.2988-.54155c-2.53214-1.4982-3.62028-4.93403-3.239-7.90191,.38128-2.96787,1.9371-5.55751,3.57558-7.94787,5.3168-7.75659,11.98158-14.55405,19.95211-19.15069s17.29417-6.91166,26.5168-5.75149,18.28114,5.9526,24.27726,13.66765" fill="#3f3d56"/></g><g><path d="M337.50472,70.2009c1.44248,3.30919,2.01795,6.6698,1.80579,9.57866l15.73277,30.65638-14.80653,7.05954-14.36514-31.85792c-2.27549-1.82449-4.34578-4.5335-5.78826-7.84269-3.29535-7.55982-2.06682-15.38819,2.74397-17.48521,4.81079-2.09702,11.38205,2.33141,14.6774,9.89122v.00002Z" fill="#ffb6b6"/><path d="M396.8335,106.11396s18-16,29-3-37,110-37,110l-25-6-31-104,20-11,20,53,24-39Z" fill={color}/></g><path d="M293.85198,74.06504c-.12971,3.60758,.56614,6.94535,1.82934,9.57419l-3.40644,34.28892,16.36345,1.14362,1.69367-34.90582c1.44877-2.53133,2.38253-5.81051,2.51224-9.41809,.29633-8.24151-3.71503-15.07537-8.95961-15.26392-5.24458-.18855-9.73633,6.33959-10.03266,14.58108v.00002Z" fill="#ffb6b6"/><path d="M318.83347,198.11397h.00003l-5.5-97.50001-20-4-5,48,3.13354,33.89925c1.24836,13.50494,14.17842,22.76588,27.36643,19.60076Z" fill={color}/></svg>
);

export default Hamburger;
