<template>
  <section class="chat-bot" :class="{ isActive: isChatOpen }">

    <div class="chat-bot__header">
      <span class="chat-bot__header__img">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 188.148 188.148"
          style="enable-background:new 0 0 188.148 188.148;"
          xml:space="preserve">
          <g>
            <g>
              <defs>
                <circle id="SVGID_1_" cx="94.074" cy="94.074" r="94.074" />
              </defs>
              <use
                xlink:href="#SVGID_1_"
                style="overflow:visible;fill:#EB6D4A;"
              />
              <clipPath id="SVGID_2_">
                <use xlink:href="#SVGID_1_" style="overflow:visible;" />
              </clipPath>
              <path
                style="clip-path:url(#SVGID_2_);fill:#ECC19C;"
                d="M135.938,52.784V84.05c0,0.453-0.011,0.905-0.021,1.357
                                c-0.02,0.936-0.072,1.871-0.154,2.796c-0.02,0.319-0.052,0.637-0.093,0.956c-0.134,1.326-0.318,2.632-0.555,3.928
                                c-0.083,0.432-0.165,0.853-0.258,1.275c-0.01,0.092-0.03,0.175-0.051,0.257c-0.083,0.432-0.186,0.854-0.288,1.275
                                c-0.041,0.226-0.103,0.452-0.154,0.679c-0.052,0.195-0.103,0.391-0.164,0.586c-0.217,0.843-0.463,1.666-0.721,2.488
                                c-0.123,0.391-0.246,0.771-0.38,1.162c-0.011,0.041-0.031,0.082-0.041,0.123c-0.124,0.349-0.247,0.699-0.37,1.048
                                c-0.041,0.103-0.082,0.205-0.124,0.319c-0.123,0.329-0.246,0.658-0.38,0.987c-0.154,0.401-0.318,0.792-0.483,1.183
                                c-0.144,0.35-0.298,0.699-0.452,1.049c-0.02,0.062-0.052,0.113-0.072,0.174c-0.175,0.37-0.339,0.741-0.514,1.1
                                c-0.175,0.38-0.36,0.761-0.556,1.142c-0.37,0.75-0.771,1.501-1.172,2.231c-0.185,0.329-0.37,0.658-0.556,0.987
                                c-1.583,2.725-3.341,5.285-5.253,7.649c-0.258,0.339-0.524,0.668-0.802,0.987c-0.381,0.462-0.772,0.915-1.162,1.357
                                c-0.35,0.391-0.699,0.781-1.059,1.162c-0.987,1.059-1.995,2.067-3.023,3.013c-0.205,0.206-0.422,0.391-0.638,0.586
                                c-0.349,0.319-0.698,0.627-1.059,0.925c-0.277,0.247-0.565,0.483-0.854,0.72c-0.74,0.606-1.48,1.192-2.23,1.737
                                c-0.309,0.237-0.628,0.463-0.946,0.679c-0.514,0.37-1.038,0.72-1.563,1.059c-0.288,0.195-0.586,0.38-0.885,0.555
                                c-1.049,0.648-2.107,1.244-3.156,1.758c-0.257,0.133-0.514,0.257-0.771,0.38c-0.258,0.123-0.524,0.247-0.802,0.37
                                c-0.34,0.154-0.679,0.298-1.018,0.432c-0.134,0.062-0.268,0.113-0.401,0.154c-0.4,0.165-0.812,0.319-1.213,0.452
                                c-0.504,0.185-1.018,0.339-1.521,0.483c-0.35,0.103-0.709,0.195-1.059,0.277c-0.021,0.011-0.041,0.021-0.072,0.021
                                c-0.35,0.082-0.699,0.165-1.049,0.226c-0.093,0.021-0.184,0.041-0.277,0.051c-0.288,0.051-0.576,0.103-0.864,0.134
                                c-0.411,0.062-0.822,0.113-1.233,0.134c-0.143,0.02-0.277,0.031-0.422,0.031c-0.328,0.021-0.657,0.031-0.977,0.031h-0.03
                                c-0.319,0-0.638-0.01-0.956-0.031c-0.124,0-0.247-0.01-0.371-0.031c-0.287-0.01-0.586-0.042-0.894-0.083
                                c-0.062,0-0.134-0.01-0.195-0.02c-0.381-0.051-0.761-0.113-1.152-0.185c-0.328-0.051-0.657-0.124-0.997-0.206
                                c-1.758-0.401-3.567-1.007-5.397-1.82c-1.563-0.689-3.146-1.521-4.719-2.488c-0.792-0.483-1.584-0.997-2.365-1.542
                                c-0.391-0.278-0.781-0.555-1.172-0.843c-1.224-0.895-2.437-1.871-3.63-2.92c-0.328-0.298-0.657-0.596-0.986-0.905
                                c-0.329-0.298-0.658-0.606-0.977-0.904c-0.803-0.771-1.584-1.573-2.345-2.406c-0.298-0.318-0.596-0.647-0.895-0.987
                                c-0.822-0.925-1.624-1.881-2.385-2.879c-0.299-0.36-0.576-0.73-0.854-1.1c-1.038-1.377-2.025-2.817-2.951-4.308
                                c-0.246-0.401-0.493-0.813-0.729-1.213c-0.288-0.483-0.565-0.976-0.843-1.47c-1.028-1.851-1.975-3.773-2.797-5.758
                                c-0.123-0.288-0.247-0.576-0.35-0.863c-0.165-0.37-0.309-0.751-0.442-1.121c-0.205-0.545-0.4-1.09-0.586-1.635
                                c-0.185-0.545-0.359-1.1-0.534-1.655c-0.165-0.535-0.319-1.069-0.463-1.614c-0.165-0.576-0.318-1.162-0.452-1.758
                                c-0.011-0.062-0.031-0.123-0.041-0.185c-0.195-0.822-0.37-1.655-0.524-2.498c-0.206-1.111-0.37-2.242-0.494-3.383
                                c-0.051-0.36-0.082-0.72-0.113-1.08c-0.041-0.38-0.071-0.751-0.092-1.131c-0.052-0.689-0.083-1.388-0.104-2.087
                                c-0.01-0.453-0.021-0.905-0.021-1.357V52.784c0-23.102,18.723-41.834,41.825-41.855h0.041c3.188,0,6.292,0.359,9.273,1.028
                                c2.725,0.617,5.347,1.501,7.835,2.622c3.393,1.522,6.549,3.475,9.387,5.809c2.385,1.954,4.555,4.154,6.446,6.58
                                C132.607,34.083,135.938,43.038,135.938,52.784z"
              />
              <path
                style="clip-path:url(#SVGID_2_);fill:#ECC19C;"
                d="M148.613,200.741v0.01H39.538v-0.01c0-6.158,1.018-12.091,2.91-17.612
                                c0.339-0.997,0.709-1.984,1.11-2.961v-0.01c0.4-0.977,0.822-1.933,1.274-2.879c1.8-3.794,4.041-7.341,6.642-10.59
                                c0.658-0.812,1.326-1.604,2.016-2.365c0.339-0.391,0.699-0.771,1.059-1.151c0.36-0.37,0.72-0.74,1.09-1.11
                                c1.841-1.84,3.814-3.526,5.892-5.079c1.038-0.771,2.087-1.491,3.177-2.19c1.09-0.689,2.2-1.347,3.331-1.964
                                c0.021-0.02,0.041-0.02,0.041-0.02c0.442-0.236,0.874-0.493,1.306-0.761c0.854-0.514,1.696-1.069,2.499-1.665
                                c0.411-0.288,0.802-0.586,1.192-0.905c0.925-0.74,1.819-1.532,2.673-2.365c0.277-0.277,0.556-0.555,0.833-0.843
                                c0.575-0.597,1.12-1.224,1.645-1.861c0.258-0.308,0.515-0.627,0.751-0.946c0.247-0.318,0.483-0.647,0.72-0.977
                                c1.83-2.55,3.3-5.356,4.38-8.349c1.306-3.64,2.015-7.557,2.015-11.649l7.948,0.041l8.173,0.041c0,4.04,0.689,7.916,1.964,11.515
                                c1.06,3.002,2.529,5.809,4.329,8.359c1.871,2.652,4.102,5.017,6.631,7.042c0.381,0.309,0.761,0.607,1.142,0.884
                                c0.37,0.278,0.75,0.545,1.141,0.802c0.083,0.062,0.154,0.113,0.237,0.165c0.37,0.247,0.74,0.494,1.131,0.72
                                c0.421,0.257,0.854,0.514,1.285,0.751c0.071,0.02,0.134,0.051,0.185,0.093c0.905,0.504,1.8,1.028,2.674,1.573
                                c0.421,0.257,0.843,0.524,1.254,0.823c0.854,0.555,1.687,1.141,2.498,1.758c0,0.011,0.011,0.011,0.011,0.011h0.01
                                c2.077,1.552,4.041,3.248,5.881,5.079C142.496,172.015,148.613,185.648,148.613,200.741z"
              />
              <path
                style="clip-path:url(#SVGID_2_);fill:#C7D4E2;"
                d="M148.614,200.743H39.539c0-6.159,1.019-12.091,2.91-17.612
                                c0.339-0.998,0.709-1.984,1.11-2.961c-0.011-0.011,0-0.011,0-0.011c0.391-0.977,0.822-1.933,1.274-2.878
                                c1.8-3.794,4.041-7.341,6.642-10.59c0.658-0.813,1.327-1.604,2.016-2.365c0.339-0.391,0.699-0.771,1.059-1.151
                                c0.36-0.37,0.72-0.74,1.09-1.11c1.841-1.84,3.814-3.527,5.892-5.079c1.038-0.771,2.087-1.491,3.177-2.19
                                c1.09-0.699,2.2-1.357,3.331-1.974c0.021-0.02,0.041-0.01,0.041-0.01v-0.01c0.442-0.247,0.874-0.494,1.306-0.751
                                c1.285-0.781,2.52-1.645,3.671-2.591c0.01,0.01,0.01,0.01,0.021,0.02c5.325,5.449,12.738,8.831,20.964,8.852h0.082
                                c8.225,0,15.669-3.393,21.015-8.842l0.011-0.01c0.729,0.606,1.49,1.172,2.272,1.696c0.082,0.061,0.154,0.113,0.236,0.164
                                c0.37,0.247,0.75,0.483,1.131,0.72c0.422,0.257,0.854,0.504,1.285,0.74c0.072,0.02,0.123,0.061,0.185,0.092
                                c0.905,0.504,1.8,1.028,2.674,1.583c0.421,0.257,0.843,0.524,1.254,0.823c0.854,0.545,1.687,1.141,2.498,1.758h0.021
                                c2.088,1.563,4.051,3.259,5.881,5.089C142.497,172.017,148.614,185.65,148.614,200.743z"
              />
              <path
                style="clip-path:url(#SVGID_2_);fill:#543E36;"
                d="M135.938,84.05c0,0.453-0.011,0.905-0.021,1.357
                                c-0.02,0.936-0.072,1.871-0.154,2.796c-0.02,0.319-0.052,0.637-0.093,0.956c-0.134,1.326-0.318,2.632-0.555,3.928
                                c-0.083,0.432-0.165,0.853-0.258,1.275c-0.01,0.092-0.03,0.175-0.051,0.257c-0.083,0.432-0.186,0.854-0.288,1.275
                                c-0.052,0.247-0.113,0.483-0.186,0.72c-0.03,0.185-0.082,0.37-0.133,0.545c-0.217,0.843-0.463,1.666-0.721,2.488
                                c-0.123,0.391-0.246,0.771-0.38,1.162c-0.011,0.041-0.031,0.082-0.041,0.123c-0.124,0.349-0.247,0.699-0.37,1.048
                                c-0.041,0.103-0.082,0.205-0.124,0.319c-0.123,0.329-0.246,0.658-0.38,0.987c-0.154,0.401-0.318,0.792-0.483,1.183
                                c-0.144,0.35-0.298,0.699-0.452,1.049c-0.02,0.062-0.052,0.113-0.072,0.174c-0.175,0.37-0.339,0.741-0.514,1.1
                                c-0.175,0.38-0.36,0.761-0.556,1.142c-0.37,0.75-0.771,1.501-1.172,2.231c-0.185,0.329-0.37,0.658-0.556,0.987
                                c-1.583,2.725-3.341,5.285-5.253,7.649c-0.258,0.339-0.524,0.668-0.802,0.987c-0.381,0.462-0.772,0.915-1.162,1.357
                                c-0.35,0.391-0.699,0.781-1.059,1.162c-0.987,1.059-1.995,2.067-3.023,3.013c-0.205,0.206-0.422,0.391-0.638,0.586
                                c-0.349,0.319-0.698,0.627-1.059,0.925c-0.277,0.247-0.565,0.483-0.854,0.72c-0.74,0.606-1.48,1.192-2.23,1.737
                                c-0.309,0.237-0.628,0.463-0.946,0.679c-0.514,0.37-1.038,0.72-1.563,1.059c-0.288,0.195-0.586,0.38-0.885,0.555
                                c-1.049,0.648-2.107,1.244-3.156,1.758c-0.257,0.133-0.514,0.257-0.771,0.38c-0.258,0.123-0.524,0.247-0.802,0.37
                                c-0.34,0.154-0.679,0.298-1.018,0.432c-0.134,0.062-0.268,0.113-0.401,0.154c-0.4,0.165-0.812,0.319-1.213,0.452
                                c-0.504,0.185-1.018,0.339-1.521,0.483c-0.35,0.103-0.709,0.195-1.059,0.277c-0.021,0.011-0.041,0.021-0.072,0.021
                                c-0.35,0.082-0.699,0.165-1.049,0.226c-0.093,0.021-0.184,0.041-0.277,0.051c-0.288,0.051-0.576,0.103-0.864,0.134
                                c-0.411,0.062-0.822,0.113-1.233,0.134c-0.143,0.02-0.277,0.031-0.422,0.031c-0.328,0.021-0.657,0.031-0.977,0.031h-0.03
                                c-0.319,0-0.638-0.01-0.956-0.031c-0.124,0-0.247-0.01-0.371-0.031c-0.287-0.01-0.586-0.042-0.894-0.083
                                c-0.062,0-0.134-0.01-0.195-0.02c-0.381-0.051-0.761-0.113-1.152-0.185c-0.328-0.051-0.657-0.124-0.997-0.206
                                c-1.758-0.401-3.567-1.007-5.397-1.82c-1.563-0.689-3.146-1.521-4.719-2.488c-0.792-0.473-1.573-0.987-2.365-1.542
                                c-0.391-0.278-0.781-0.555-1.172-0.843c-1.224-0.895-2.437-1.871-3.63-2.92c-0.328-0.298-0.657-0.596-0.986-0.905
                                c-0.329-0.298-0.658-0.606-0.977-0.904c-0.803-0.771-1.584-1.573-2.345-2.406c-0.298-0.318-0.596-0.647-0.895-0.987
                                c-0.822-0.925-1.624-1.881-2.385-2.879c-0.299-0.36-0.576-0.73-0.854-1.1c-1.038-1.377-2.025-2.817-2.951-4.308
                                c-0.246-0.401-0.493-0.813-0.729-1.213c-0.288-0.483-0.565-0.976-0.843-1.47c-1.028-1.851-1.975-3.773-2.797-5.758
                                c-0.123-0.288-0.247-0.576-0.35-0.863c-0.165-0.37-0.309-0.751-0.442-1.121c-0.205-0.545-0.4-1.09-0.586-1.635
                                c-0.185-0.545-0.359-1.1-0.534-1.655c-0.165-0.535-0.319-1.069-0.463-1.614c-0.165-0.576-0.318-1.162-0.452-1.758
                                c-0.011-0.062-0.031-0.123-0.041-0.185c-0.195-0.822-0.37-1.655-0.524-2.498c-0.206-1.111-0.37-2.242-0.494-3.383
                                c-0.051-0.36-0.082-0.72-0.113-1.08c-0.041-0.38-0.071-0.751-0.092-1.131c-0.052-0.689-0.083-1.388-0.104-2.087
                                c-0.01-0.453-0.021-0.905-0.021-1.357l6.684,13.14l11.484,5.007l13.581,1.224l10.076,0.915h0.062l9.428,0.854l21.005,1.892
                                L135.938,84.05z"
              />
              <path
                style="clip-path:url(#SVGID_2_);fill:#543E36;"
                d="M127.023,26.968c-2.046,4.637-4.709,8.945-7.855,12.852
                                c-0.185,0.227-0.37,0.453-0.565,0.679c-6.446,7.762-14.897,13.798-24.562,17.324c-2.54,0.936-5.161,1.696-7.855,2.262
                                c-1.799,0.38-3.629,0.679-5.49,0.895c-2.139,0.236-4.318,0.36-6.528,0.36c-2.529,0-5.007-0.165-7.443-0.483
                                c-2.386-0.298-4.72-0.74-7.002-1.336c-1.306-0.329-2.581-0.709-3.846-1.131c-1.244-0.411-2.457-0.864-3.66-1.357v-4.246
                                c0-23.102,18.723-41.834,41.825-41.855h0.041c3.188,0,6.292,0.359,9.273,1.028c2.725,0.617,5.347,1.501,7.835,2.622
                                c3.393,1.522,6.549,3.475,9.387,5.809C122.962,22.341,125.132,24.542,127.023,26.968z"
              />
              <path
                style="clip-path:url(#SVGID_2_);fill:#543E36;"
                d="M135.938,52.784v8.235c-7.136-5.521-13.047-12.502-17.314-20.48
                                c-0.01-0.01-0.01-0.031-0.021-0.041c-4.194-7.834-6.796-16.625-7.412-25.92c3.393,1.522,6.549,3.475,9.387,5.809
                                c2.385,1.954,4.555,4.154,6.446,6.58C132.607,34.083,135.938,43.038,135.938,52.784z"
              />
              <path
                style="clip-path:url(#SVGID_2_);fill:#543E36;"
                d="M57.12,56.013c-0.441,0.771-0.843,1.563-1.244,2.375
                                c-0.153,0.318-0.308,0.658-0.462,0.987c-2.025,4.503-3.044,8.924-3.188,12.914c0,0.113-0.011,0.236-0.011,0.35V56.517
                                c0-0.576,0.021-1.142,0.021-1.697C53.861,55.242,55.485,55.653,57.12,56.013z"
              />
              <path
                style="clip-path:url(#SVGID_2_);fill:#543E36;"
                d="M131.054,56.013c0.622,1.093,1.177,2.213,1.71,3.361
                                c2.088,4.643,3.11,9.178,3.198,13.268V56.512c0-0.567-0.021-1.134-0.021-1.688C134.318,55.243,132.697,55.648,131.054,56.013z"
              />
              <path
                style="clip-path:url(#SVGID_2_);fill:#1A1A1A;"
                d="M130.972,60.167c0-0.175-0.134-0.329-0.309-0.35
                                c-1.48-0.226-8.143-1.142-15.309-1.142c-8.133,0-18.63,2.55-20.46,2.55H93.27c-0.854,0-3.588-0.555-7.084-1.141
                                c-4.02-0.679-9.037-1.409-13.376-1.409c-5.243,0-10.22,0.494-13.088,0.843c-1.049,0.124-1.82,0.236-2.221,0.298
                                c-0.175,0.021-0.309,0.175-0.309,0.35l-0.082,4.369c0,0.154,0.093,0.288,0.236,0.35l0.493,0.175
                                c0.73,0.278,0.669,13.448,4.596,16.738c2.334,1.943,4.411,3.053,13.16,3.053c5.069,0,8.256-1.367,11.279-5.449
                                c2.18-2.93,4.112-9.86,4.112-9.86c0.586-2.858,2.714-3.084,3.054-3.105c0.021,0,0.041,0,0.041,0c0.071,0,2.468,0.041,3.095,3.105
                                c0,0,1.933,6.93,4.112,9.86c3.022,4.082,6.21,5.449,11.278,5.449c8.75,0,10.826-1.11,13.16-3.053
                                c3.928-3.29,3.866-16.46,4.596-16.738l0.494-0.175c0.143-0.062,0.236-0.195,0.236-0.35L130.972,60.167z M86.875,75.753
                                c-1.285,3.043-4.606,6.971-9.284,7.207c-14.034,0.709-14.682-3.208-15.587-6.313c-0.915-3.105-1.151-5.83-0.792-8.935
                                c0.37-3.105,1.152-4.925,2.561-5.84c0.606-0.401,1.265-0.761,2.951-1.018c1.511-0.226,3.845-0.36,7.731-0.36
                                c2.251,0,4.359,0.175,6.24,0.483c4.997,0.802,8.369,2.499,8.369,4.174C89.064,66.294,88.776,71.249,86.875,75.753z
                                M126.159,76.647c-0.904,3.105-1.552,7.022-15.586,6.313c-4.678-0.236-7.999-4.164-9.284-7.207
                                c-1.902-4.503-2.189-9.459-2.189-10.6c0-2.303,6.395-4.658,14.609-4.658c8.215,0,9.53,0.617,10.683,1.378
                                c1.408,0.915,2.189,2.735,2.56,5.84C127.312,70.818,127.075,73.543,126.159,76.647z"
              />
              <g style="clip-path:url(#SVGID_2_);">
                <path
                  style="fill:#543E36;"
                  d="M94.123,90.65l-0.011,10.138l-0.01,3.547v2.786l-0.011,9.253v0.01l-0.01-0.01h-0.011l-0.03-0.021
                                    L53.604,95.771c-0.011-0.062-0.031-0.123-0.041-0.185c-0.195-0.822-0.37-1.655-0.524-2.498c-0.206-1.111-0.37-2.242-0.494-3.383
                                    c-0.051-0.36-0.082-0.72-0.113-1.08c-0.041-0.38-0.071-0.751-0.092-1.131c-0.052-0.689-0.083-1.388-0.104-2.087
                                    c-0.01-0.453-0.021-0.905-0.021-1.357V71.764c0,0.175,0.011,0.35,0.011,0.524c0.082,2.971,0.555,6.241,1.47,9.582
                                    c0.71,2.57,1.594,4.945,2.622,7.063v0.01c2.694,5.604,6.303,9.407,9.623,10.024c0.206,0.031,0.422,0.051,0.628,0.072
                                    c1.285,0.144,2.632,0.226,4.02,0.226c5.243,0,9.901-4.215,12.831-5.922c0.021-0.01,0.041-0.021,0.062-0.031
                                    c0.154-0.093,0.309-0.185,0.442-0.278c0.041-0.031,0.082-0.051,0.123-0.072c2.468-1.409,6.025-2.303,9.994-2.313H94.123z"
                />
                <path
                  style="fill:#543E36;"
                  d="M135.947,71.764l-0.01,12.286c0,3.085-0.288,6.107-0.822,9.038
                                    c-0.217,1.172-0.463,2.333-0.751,3.485l-9.49,13.705l-30.782,6.097h-0.01l-0.011,0.01v-0.01l-0.03-25.727h0.082
                                    c3.969,0.01,7.536,0.905,10.004,2.313c0.041,0.021,0.071,0.041,0.113,0.072c0.144,0.093,0.298,0.185,0.452,0.278
                                    c0.01,0.01,0.03,0.021,0.051,0.031c2.941,1.707,7.588,5.925,12.832,5.925c1.388,0,2.734-0.082,4.019-0.226
                                    c0.216-0.021,0.422-0.041,0.638-0.072c3.311-0.617,6.93-4.421,9.613-10.024v-0.01c1.027-2.118,1.912-4.493,2.621-7.063
                                    c0.926-3.393,1.409-6.703,1.471-9.716C135.947,72.021,135.947,71.897,135.947,71.764z"
                />
              </g>
              <ellipse
                style="clip-path:url(#SVGID_2_);fill:#ECC19C;"
                cx="94.074"
                cy="103.955"
                rx="10.255"
                ry="3.17"
              />
              <g style="clip-path:url(#SVGID_2_);">
                <path
                  style="fill:#435363;"
                  d="M64.131,155.174v56.558h-4.369v-53.37c0.586-0.473,1.172-0.936,1.769-1.378
                                    C62.384,156.347,63.247,155.75,64.131,155.174z"
                />
                <polygon
                  style="fill:#435363;"
                  points="124.021,155.185 124.021,200.741 124.021,211.732 128.39,211.732 128.39,200.741 
                                    128.39,158.372 			"
                />
              </g>
              <g style="clip-path:url(#SVGID_2_);">
                <g>
                  <polygon
                    style="fill:#141720;"
                    points="82.113,151.713 94.074,166.049 106.036,151.713 				"
                  />
                  <path
                    style="fill:#141720;"
                    d="M94.074,225.437h-7.073l5.11-65.8c0.215,0.837,3.712,0.837,3.927,0l5.11,65.8H94.074z"
                  />
                </g>
                <g>
                  <path
                    style="fill:#E7ECF2;"
                    d="M94.07,151.638l-0.03,0.051l-0.011,0.021l-4.966,8.338l-4.637,7.772l-12.554-17.447
                                        c0.401-0.288,0.802-0.596,1.183-0.915c0.01,0.01,0.01,0.01,0.021,0.021c2.518-2.005,4.76-4.359,6.621-6.991l14.343,9.13
                                        L94.07,151.638z"
                  />
                  <path
                    style="fill:#E7ECF2;"
                    d="M116.278,150.373l-12.554,17.447l-4.637-7.772l-4.977-8.338l-0.041-0.072l14.436-9.191
                                        c1.871,2.652,4.102,5.017,6.631,7.042C115.518,149.797,115.897,150.096,116.278,150.373z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </span>
      <p class="chat-bot__header__title">ВГУЭС Бот</p>
    </div>

    <div class="chat-bot__chat">
      <div class="loading"  v-if="!dialog.length">
        <p class="loading__text">Загрузка...</p>
        <Loader/>
      </div>

      <div class="status" v-else-if="status.text">
        <p class="status__title">Упс...</p>
        <p class="status__text">{{ status.text }}</p>
        <p class="status__reloadPage">Перезагрузите страницу</p>
        <p class="status__errorCode" v-if="status.errorStatusCode">
          Код ошибки: {{ status.errorStatusCode }}
        </p>
        <div class="status__svg">
          <svg viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="11" width="33" height="33" rx="8" stroke="black"/>
            <path d="M17 9C17 7.89543 17.8954 7 19 7H27C28.1046 7 29 7.89543 29 9V11H17V9Z" stroke="black"/>
            <path d="M42 21C43.1046 21 44 21.8954 44 23L44 31C44 32.1046 43.1046 33 42 33L40 33L40 21L42 21Z" stroke="black"/>
            <path d="M5 33C3.89543 33 3 32.1046 3 31L3 23C3 21.8954 3.89543 21 5 21L7 21L7 33L5 33Z" stroke="black"/>
            <rect x="1" y="26" width="2" height="2" fill="black" stroke="black"/>
            <rect x="44" y="26" width="2" height="2" fill="black" stroke="black"/>
            <path d="M23 7C23 2 23.5 2 28.5 2" stroke="black"/>
            <circle cx="30" cy="3" r="2" fill="black" stroke="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 27C32.2091 27 34 25.2091 34 23C34 20.7909 32.2091 19 30 19C27.7909 19 26 20.7909 26 23C26 25.2091 27.7909 27 30 27ZM30 26C31.6569 26 33 24.6569 33 23C33 21.3431 31.6569 20 30 20C28.3431 20 27 21.3431 27 23C27 24.6569 28.3431 26 30 26Z" fill="black"/>
            <path d="M33.5 23C33.5 24.933 31.933 26.5 30 26.5V27.5C32.4853 27.5 34.5 25.4853 34.5 23H33.5ZM30 19.5C31.933 19.5 33.5 21.067 33.5 23H34.5C34.5 20.5147 32.4853 18.5 30 18.5V19.5ZM26.5 23C26.5 21.067 28.067 19.5 30 19.5V18.5C27.5147 18.5 25.5 20.5147 25.5 23H26.5ZM30 26.5C28.067 26.5 26.5 24.933 26.5 23H25.5C25.5 25.4853 27.5147 27.5 30 27.5V26.5ZM32.5 23C32.5 24.3807 31.3807 25.5 30 25.5V26.5C31.933 26.5 33.5 24.933 33.5 23H32.5ZM30 20.5C31.3807 20.5 32.5 21.6193 32.5 23H33.5C33.5 21.067 31.933 19.5 30 19.5V20.5ZM27.5 23C27.5 21.6193 28.6193 20.5 30 20.5V19.5C28.067 19.5 26.5 21.067 26.5 23H27.5ZM30 25.5C28.6193 25.5 27.5 24.3807 27.5 23H26.5C26.5 24.933 28.067 26.5 30 26.5V25.5Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20H19V22H18V24H19V26H17V25H15V26H13V24H14V22H13V20H15V21H17V20Z" fill="black"/>
            <path d="M19 20H19.5V19.5H19V20ZM17 20V19.5H16.5V20H17ZM19 22V22.5H19.5V22H19ZM18 22V21.5H17.5V22H18ZM18 24H17.5V24.5H18V24ZM19 24H19.5V23.5H19V24ZM19 26V26.5H19.5V26H19ZM17 26H16.5V26.5H17V26ZM17 25H17.5V24.5H17V25ZM15 25V24.5H14.5V25H15ZM15 26V26.5H15.5V26H15ZM13 26H12.5V26.5H13V26ZM13 24V23.5H12.5V24H13ZM14 24V24.5H14.5V24H14ZM14 22H14.5V21.5H14V22ZM13 22H12.5V22.5H13V22ZM13 20V19.5H12.5V20H13ZM15 20H15.5V19.5H15V20ZM15 21H14.5V21.5H15V21ZM17 21V21.5H17.5V21H17ZM19 19.5H17V20.5H19V19.5ZM19.5 22V20H18.5V22H19.5ZM18 22.5H19V21.5H18V22.5ZM18.5 24V22H17.5V24H18.5ZM19 23.5H18V24.5H19V23.5ZM19.5 26V24H18.5V26H19.5ZM17 26.5H19V25.5H17V26.5ZM16.5 25V26H17.5V25H16.5ZM15 25.5H17V24.5H15V25.5ZM15.5 26V25H14.5V26H15.5ZM13 26.5H15V25.5H13V26.5ZM12.5 24V26H13.5V24H12.5ZM14 23.5H13V24.5H14V23.5ZM13.5 22V24H14.5V22H13.5ZM14 21.5H13V22.5H14V21.5ZM13.5 22V20H12.5V22H13.5ZM13 20.5H15V19.5H13V20.5ZM14.5 20V21H15.5V20H14.5ZM17 20.5H15V21.5H17V20.5ZM16.5 20V21H17.5V20H16.5Z" fill="black"/>
            <path d="M17 34L17.3123 33.6096C17.1423 33.4735 16.9038 33.4632 16.7226 33.584L17 34ZM19.5 36L19.1877 36.3904C19.3317 36.5057 19.5274 36.5322 19.697 36.4596L19.5 36ZM23 34.5L23.2236 34.0528C23.0921 33.987 22.9382 33.9825 22.803 34.0404L23 34.5ZM26 36L25.7764 36.4472C25.9369 36.5275 26.1281 36.5156 26.2774 36.416L26 36ZM29 34L29.2774 33.584C29.1094 33.472 28.8906 33.472 28.7226 33.584L29 34ZM14.2774 36.416L17.2774 34.416L16.7226 33.584L13.7226 35.584L14.2774 36.416ZM16.6877 34.3904L19.1877 36.3904L19.8123 35.6096L17.3123 33.6096L16.6877 34.3904ZM19.697 36.4596L23.197 34.9596L22.803 34.0404L19.303 35.5404L19.697 36.4596ZM22.7764 34.9472L25.7764 36.4472L26.2236 35.5528L23.2236 34.0528L22.7764 34.9472ZM26.2774 36.416L29.2774 34.416L28.7226 33.584L25.7226 35.584L26.2774 36.416ZM28.7226 34.416L31.7226 36.416L32.2774 35.584L29.2774 33.584L28.7226 34.416Z" fill="black"/>
          </svg>
        </div>
      </div>

      <div class="chat-bot__wrapper" v-else>
        <Search />
        <Dialog :dialog="dialog" />
      </div>
    </div>
    
  </section>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Search from "@/components/Search.vue";
import Dialog from "@/components/Dialog.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "Chat",
  components: {
    Search,
    Dialog,
    Loader
  },
  computed: {
    ...mapState(["isChatOpen", "session", "dialog","status"])
  },
  methods: {
    ...mapActions([
      "FETCH_QUESTIONS",
      "REGISTER_SESSION",
      "GET_QUESTION",
      "CHECK_SESSION",
      "GET_HISTORY"
    ]),
    ...mapMutations(["CLEAR_COOKIE"]),
  },
  async created() {
    this.FETCH_QUESTIONS();
    // если coockie нет то регестрируем новую сессию и записываем id сессии в куки
    if (!this.session) {
      // console.log(`кук нет регестрируем сессию`);
      await this.REGISTER_SESSION();
      await this.GET_QUESTION(); // начинаем диалог
        
    } else {
      // console.log("куки есть", this.session);
      // проверяем на срок годности coockie
      const isValid = await this.CHECK_SESSION();
      // если сессия валидна
      if (isValid === "valid") {
        // console.log("session is valid");
        // подгружаем историю и продолжаем диалог
        this.GET_HISTORY();
      } // если сессия не валидна
      else {
        // console.log("session is not valid");
        this.CLEAR_COOKIE();
        // TODO: что-то делать тут
      }
    }
  }
};
</script>
<style lang="stylus">
@import '~@/assets/stylus/_colors.styl'
@import '~@/assets/stylus/chat.styl'
</style>
