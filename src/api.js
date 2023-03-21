//simulate real api
//every method returns promise

export const getComments = async () => {
  return [
    {
      id: "1",
      body: "First comment",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
      userImage:"https://robohash.org/1/?set=set3.jpg",
      post: 'I am baby schlitz subway tile freegan, waistcoat pitchfork lumbersexual cray. Put a bird on it locavore blog freegan keffiyeh kinfolk cardigan selfies activated charcoal deep v sriracha unicorn VHS PBR&B. Gatekeep retro ethical hot chicken sriracha raclette four loko jianbing cred coloring book cardigan meh fanny pack. Intelligentsia migas crucifix iceland tonx affogato taiyaki, gatekeep shabby chic. Swag live-edge 3 wolf moon, synth subway tile edison bulb small batch etsy hell of neutra.',
      photo: 'https://via.placeholder.com/600/24f355',
      tags: [
        "history",
        "american",
        "crime"
      ]
    },
    {
      id: "2",
      body: "Second comment",
      username: "John",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
      userImage:'https://robohash.org/2',
      post:'Taxidermy street art lo-fi plaid four dollar toast normcore. DSA irony drinking vinegar banh mi sustainable artisan jean shorts sus mustache chambray. Quinoa grailed street art schlitz williamsburg mustache. Fanny pack tonx subway tile beard slow-carb jianbing migas jawn.',
      photo: 'https://via.placeholder.com/600/f66b97',
      tags: [
        "history",
        "american",
        "crime"
      ]
    },
    {
      id: "3",
      body: "First comment first child",
      username: "John",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
      userImage:'https://robohash.org/2',
      post:'Messenger bag thundercats succulents irony, shoreditch hoodie fashion axe gluten-free beard. Williamsburg pop-up raw denim wayfarers XOXO echo park, direct trade paleo. Butcher food truck literally organic. Biodiesel artisan keytar chambray, chillwave lumbersexual vegan subway tile offal.',
      photo: 'https://via.placeholder.com/600/369f41',
      tags: [
        "history",
        "american",
        "crime"
      ]
    },
    {
      id: "4",
      body: "Second comment second child",
      username: "John",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
      userImage:'https://robohash.org/2',
      post:'Single-origin coffee neutra street art pitchfork gentrify esse gorpcore meh yr eiusmod wayfarers ethical ugh. Polaroid pinterest ethical, offal in tacos deep v vape. Typewriter man bun adipisicing squid. Lumbersexual meh you probably haven heard of them dolore wayfarers single-origin coffee velit irony enim brunch echo park.',
      photo:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYSERISEhUZGBIZERISERESGBgSEhIRGRQZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHjQrJCQxNDQ0NDQ0NDQ0NDQ0NDQ0MTQ0MTQ0PTQxNDQ0NDQ0NDQ/MTQ0NjQ0NDQ0NDE0MTQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBQYEBwj/xAA5EAACAQIEBAQFAgUEAgMAAAABAgADEQQSITEFQVFhBhMicRQygZGhQlIjkrHB4QcVYvAW0Rc0wv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHxEBAQACAgIDAQAAAAAAAAAAAAECERIhMUEDMlET/9oADAMBAAIRAxEAPwDCf+MVOv4hL4Xq8nP5nrq8I7QxwkdJjbpxeSDw5XH6z9oa8BxA/X+J60OEjpCHCh0ja6eUrwauP1GSLwmr1M9U/wBpEccJXpC6eYLwyp1MlXhr9TPSxwle0f8A2lO0g86p8MfvO7D8JPObleFp0kyYFByjSshS4P2k44L2mvSgvSSeUOkaNsY3Be0H/Zu02ppDpBNEdI0bYo8H7SJuDnpNwaA6QThl6SaXbBPwphOd8A4noTYRTykD8OU8o0beevh3EibOOU378JB5TmfgoPKNIwzVmHKAcWRymxq8C7Tjq8A7RoZn4+L4+Xj+Hz+2B/4+f2xo7Uvx8Xx3Yy9XgB6Q14Cf2xo7Z7409DG+LboZpV4Cf2yZeBH9smjtkzXfpG8xzymyHAz0hpwS3KXR2y+GwjtveW+G4V2miw3CrSxTCgRppQUOF9pY0eHAcpZBQOUe8aTbnTCgSUUwIeaNeFICPaNFDKXNFeCBCtNIUe0QEeA0eKOBAaPaPaIiAMcCK0ICA6iPFFCFFaKKA1o1oUaFDliIhREQI7RWhERESCMiNlhkRrQoPLHSN5Y6Q4oAZB0iyDpDjwAydo+WFHgR2j2h2igRxQ7RrQAMEyQiCZBGYxvJLRZYaRZos8MpA8uB1hYQWEsMTTmjyx8sO8YtAbLFaNeK0BRrQrRGAIEeKKFIRxGEeA8aNeMTAK8UC8cGA8cRjFAeMRHBigRkRoZEEiQLLFliBjgwBtFaHaK0KG0e0e0e0AbRWhRQAtGIkkYiBGRAIkxEAiBCREGkhEArIHDx9IBWDA7BCEEQ5pkxjWhRwIDBYVoUEmAxjR40AbRASk8VcXbCU0ZNXZsqg7aDUn8bdZU4Pxxa3xFBlGl3p3Yfym2n1mbZGpjlZuNkdIDOBzmS4t40ool6ZLE6LoQCSNrnnMniPGlVipC20II53l3Kas8vVHxCjcic9biSKLlh955BW8QV39TMVBa1hygPiHfdyeusztZHq9Tj9IW9Y+8OnxqmdmH3nkBex11hq9tmIHuZOS8XtFDHI2xEbiPE6WHpmpVcKuw5sx6KOZnjmH4y6NlpuSd2J1VF5sx/tzljRd6zipWcswFlV7EKPba/tFyWYbXHFvEmJrXemTRpC5RRl8xuWZiQfoOXfQzccCxHmYWhUJuWpqSTuWtY/m88xxdTNmv8oU/Wb/wzi0XCYdCRmFJQw6HeMfK5Sa6X0REBaynnCzjrOjkFkgyUMDEyyAA0IGCywYE1o1oKtDBgNaKHaMRACKFFAEiCRDtGIhURECTFYJWBFeNaEywcsDpEKADHvKyMQryMGPeAV4o0aAUQjTO+KePjCpYauw22I7yW6WTan8cVA2KoKNctN2I6Nf8A9WnFhsUhUaj2Mo8Hi2qO71GLMGzWvdzTNlY/QhfvIsS5pt5lNgUve3Tsek58tvTjj1FvxHhwPqQAX3VgCrjaxXmJk+IYM7pcMgLmkbsco3Kk6sg57ledxrNfwvFhqbMTnY635AdhuBrpt/SZ7xAxUq4sjKwfPzQ3P7dz766bdcS6vS5SWdqbzySLlSct7hrqRblJy75VAa5VGcmnYGwZhr9oVTCJVpl8pp1jZyUH8CoDbUgmym9tV012Er6uaiiqx3JXKvymzfNyvvtOssrhZZ3Xa1R1pq3zgshuCGNj1sL8iJzVaj1XCqGuxASmNDc7D/ukjpKFcZGZSwIBUC3yg3YW5k3t0EmoVWR9Vs4X0suZbrluCDf2/wAcpZ+GNntPQHluKI3GVnsL+ZUOwBAPpXYcr3Muqbuy2XYbr8xOmpNjt9PpKinWQDO1O59NmRje5IFgee178spnXhOI03ZEXOoFvVvma+5J2FhMXf47Sz9dSVs91CkKNXzj1NYXN+1hOLAcRq/vIJJJt1JnTVOfzAz2QBiGBsXI2U/uG33lUD5eskplI1FPj1ZQAHv7zsXxRWy2tc+8y9PFKw3sY3mMh11BlmTPGNXQ8YOvzqfpOxfHK6XBH0mO8y4kDia5VOMepYLxXScD1CXVDiCONGE8Jdra7HrOrBcXqJ8rn2O0vJni91Wx2j2nnHBPGRWwq/flNxw/jCVgMrAzUylYuNiwDQw0QW+0YrKh7RrRrwrwBjQ4JEKYxREQTAREbLFmizQEI4jLHErJxHiEcCAooQEZiIEWIqqilibAC5vPJuN4/wCJrs17qGPq6LytNf464p5dHykP8RzlFtwvPX2nnBIQ6mwAC6gkm/Q7cpyzvp2+OeypVstcuNcqt6T6Q6WsVB6kfnWFxBUIR9mdQ+R2y+knTNbqP6yB3FNajEA8he7WNth95w4vifnJTVl/iAhBfRmFgFJtv0vzsJjVt6dplMZqtXgMW2TKpREAUuUU2tbQlzbT2E5sTWSmz6Cs+62P8MlRdSR+4XAsLgg8tb19TFZESinpAtnzGy631RjzvfY9QZPRwCVCGyubpmRRlbO4XRjsRbMfqB9XH3U5eo5MRUerfMuSmXZhkOUU2CsxKna1iNP7gThr4Q0wc1gVZbLfRyA11W2uoI+0tKmEcujObWbICxHpBZrI6WuBdiNum4kXinhT0lR1v5eZQAAMqMf0A/mxH6rzeOvDllLq3SCoul8pGRkdLaXphzc2ta3qtr+3tJ6iFkrFMuam+ijT0gH5hsw1F7W325yyxWAtRwz3A/hhWAGhXXRr8gNLn7GN4exSjOtQA39DZrZrZQqhjqLEZbH+knLra8e9Krh2Mat6VXZV9ZP6rW225tr/AMr3jPhyWsLelXYvTJCFwQMzlgNACSbDS46y+wfCPh8TWqDIKBphlZtFVrbX6aE/iRtjcOHVajOMx9T5HRHI2OZr3t/0xvfg46+1Z/BUc7ikxu2YtmDABhe4F9RY27zrx+DancMpCnVTo2nuJYcSfDU3QK91ucwCstm3ObTQa8yfeWPxCNTyEhktmBGpsT84uO/47Sb9rr0x6ppbptOjD1G0DjTlJcZQ3y7i9iNbzgTFG+RxY/1iwlW+cD2keIS2okC+oWB1kfxJVrNtIbDVYkbQEfkJ3OEyX66ziRALnnyk2unWtEnY95acOxT09aZsRuORldhiZ1oLNcfWJk1cW54F4xVyEqeltiDNnh8StQXBniT07XY78jL7wd4lbzDTqG4BsD2nTHJxyxeqlYBSR4euHAIMnBnRzRRXk1oDJAC8VozLBzQHKQckLNFmgCsICCse8rIxCgXivCjvI6h01hXnPjKuVGJ5AwPKPFGNWpxBgS2RVK67X5ynxyhcgNzdg4HX2PSR8Sr+Zime11LsTtqL6bwuJMrZLb7GzAEEbX0/E4ZeXox+qHE+pGN9RUIVRz0HP7QMNhBTsxt5hJszeoLpvba86sKAUpswBF2BNyG1OwNtCCN7iIrqxJCoL25lDoNDyN/xJv0ut9uKhRZ62V1Vwbi4DIH1FyDl0IO+tu3OabhXDgSUayU10W4voxBIXRnHtew6gaSgXFlnWjRZVNwXqEXVBc6Ai9jrvyue80GD4SqMpd2exGU30YdgOW+mpms70mEmzcSxOGptUyfxMikF2PoQnQFnIuDcWAW5Omm8hwnGMPiEenUUZCoDsrM4XUWdlYBrXt6rEDnaVHiDDLT8yg11BxHxCZbBaiMtiRfcqSdOkrcA6U6i1A7FVV8+a1iCpAUdSSR9puYSzbll8uUy03vG8Jkp0gjFqYAFhY5rfLqe5vfrrMuhAqBrDWytm0OY63LHUWnbwHjAq0Ph6rZWUKqBt2UHT6WnDicO3mvlvbNcWudtf6icfrbjXo+0mUWXjiq3kUEB9JAY/pB2AJ+/5ma4YrJnV7Ck1NzUXMcui+lgOTA2se8uPEmO834VXzBQjK5SxsxtdbHQ7SKhwanRK1KjNVTQqi+lTzUOdSOtu064ZTHGSuPyYZZZ2zx01SYm+HwzMBneimYEahra6W/7/TP4tmwtfOil6LZiFUBspJOYDaw/zHNV6tUMSutstycir0W2mmp17dZpsRhUdAwA8xVIJWzKNOY7ba9Jy3qu2txlRUD7LbMSelh0tynJj8OKlgo9Q2Ydek7qqEXyqDqbOyuE/mzZZwPRrPqGpqo1OV0sPck6TpHKqw1XpP6gdJd4OmmITf1dJXeQxJV2R77Mro+v3g0aD0nzBWsD+02jKbTG6qzxOEyKQeW0r/Lym5mqpBa1PP0GomYxgPmdrzDrpa4NBa5hOGDXXaFgEuoJna9rTjctV3mO4hemWQ36Snw9Pyyx2N7g95oaaM4souegj1PDleop9IUfczrj24ZzS+8F+IfMUI7eoaGbkYhbXvPEvJqYB81ve3SSVfHDggagc7gztjtwy09grcVRDqRBTjCHnPJqvGxWXNnAbsbXlLW4+6tam7A35ai8vaXUe+JjEbYiSkXng2D8aYik4Lrdee6n3E9O8NeJlxCKwa4P3B6GVJZWoZINoaOCLiPKIAYQaILHCwycNHvGCx8sKV5XcXYeU9zb0nW8sSsofFBVcNULH9J16aRVjxjFn5trXJBjric6qEUF1HqBuVN9LjlDpU3cgJkIJ5ugJHZSb/iWFekyKBk1JALFWUX6A2sZyrrFWuIYIyo2t7kHYA62t0uJLUFasosyrTNs2o+a17H6/wBoVfCVEzFKDkEXZiLD+Xfn1kuAx5RQKqMqFrAKhFyOXeZu53Gpq9VZcK4eioVtnN8rg3Abpe7fm0bHU3p5mGhIAZQLMFO+o7W1nfS4kwFqFF2zG5YowQ9bsdL6dY/wT1beZlprfSmG9f3X3O857u9114zWoosXj3dQlVUempsquACoA3UrsOUhwtFFNxRUNYlbszMOV7G9v8TRv4fDXZVe1rXYKfa2U7CVGOovTFhTYjkMoYknckBifvNXLrTMw72z9SiVqB1JNrsCTzvtfprNJwrEZ1B0vzG+vacCtnTJkKtoXDA3uRfbl/mc/mPTNtUXMALLmUnYeq2kzlbl17jeGMx7/Vpx3DlipA0zAkb7m395JQoWCh2OQ3UNexW/XXTlIcHg3rV0QsSdS7BiAiA66dTqAP8A1NXwjC0vjEV1DkKxUPfJTe2jW2vbrMy+I3ljq2q/DcBIA8xdCLrcHOfYGx++nbSQVsPXwtyrIqEWu7BXItb52IGb2VZrOIYlMrBmqnUkhQSWNra5BoOgMxuPq4WoVDPVF2yhNSB19JQfkzc3XLLUQFqaAPWYO51u5drDlsDf3zGQV2SuLU6iEj9FzTt7AgCd1bDUW1XE2UaZagFM/T1aCR0+GVH1SnnFwFZL1Be2l2TMv5mmbpR1eFve5I3vnAva3IkaRPh9bc+c06eHcSAHai+9hYFja3PpOU0CHyEEE6guDntzFyLzcrncdOnw8jqDTZri217zi41h1ViecuMBSWne55byp4rZiSpvOWXt2x8Rw4CoRuZbZrgWldhqYtDq4nyxOXG2uvKSPR/DWDREDNa80K1FOigTyDhXiGpUqCkhsOZ7T0zAvkRb72neS49PPlZl2r/EPBfOBy7zznjfgysoLqQba5SCL+xnsAri8krUw62IuJuZWeGLhL5fO+A4WajsjEow+YMNR9JNSwAp1wvzgW26zb+N+AOGFWkLMt9hbMvQyPwxwwMA76udSTvNXLpiYd6V+K4BUxKKEVUGlmOpt7SClwjEcPdaiEulx5i2sbdRPVsBhlUDQTrxOASotiBJMqtwjm8PY3zaantLi04OHYRaWg2lpNxmxBFOjKBFp2/ErCHNGDdjJ7jqI2n7hAhZ9NjMH4/xFRqORKbkFhmIUsAt9dp6DlH7oLUkO7RVleP+EfDDYr+PUASmHI3uzW5BbafebpeF000pIFHMj5j7mWOIcoxREJUbMouDfXl/3ScuHdy5BR8pG5UixB/z+Jyrtj4cVTBk3H9ZR47CMFKVHIFuWj27Wtb3uJrDTcOSAzAi40tl/wCP+e8rOL8NrVLGnSJa+5ZABfe9zM8a3yjANimoVBTKlwdENS9Wq/MjUWO3NVHeWeG44LCzN0AR8tO/Nbklbj/jcd50cT8JY2qAqU0W5JdndT7Cw+Yc7HS+99LV3/x1jm+aovQ3N9Om+3aauG4zM9XS2Xi4fbL/ADO5+ovlP0EhUUqjWsEufUw/h2PLRDb+YmQ0/wDT3GohC1UuTqTocoFgo10G/wB5PQ8F49CL+UwAFhmtraxMxfidJ80QYrAGi4IZypGhbKwI7nvJvMpshWqoKsCCp0FrcgNZ1P4dx+UhqQI2stRdrdzOZPDOLQ+nDNbqHQn75pj+Vl23/aWacnByuGWoMrLmdiHYZ3ZL+kczax2/vNBg69OkM98znVb+nJ3t1lZ/sWNv/wDWbfclD/RoFbwtjXA0ZDffID/+5rju7sZuepqVBxrFUyWZxmbn+pvfKOXddfeZytxJmqEsTly3Um1WmQRa4DajnqCTv7TZUv8ATWoxWpUxID6aZL6WtlN2sZ24j/TYuhRMQFJNycgZSetswN+9/e86zFwyy2qPCXAadc+bWANNSoCozZWff9WoUcxfW+wnolPEpTslNQqhbgKNJVcF8H1sPRFLzkazEghGUagcsxnYnh2sHBDoRzHqB29tpONnhrljfNWCY5T7zm4lw6nikIZQKg+WpYFlPfqIC8CrB1YZcouSAxFzbTlJ04dXVr5Bbsw2icvxLx9V55xXBVCxpqMzqSpsPTp/SDhvCNdxckD6X/vPTKPDyLs6eq+tiDoNB+JP5Vv0tLwl8p/TXh5sngyso+cfy/5nHivBNd9M/wBhPVCOxiyHoYnxyF+S15fwzwJWovnR/V3Gk2uCwFVVAcgn2l2EPQ/aFlPf7S3GVmZWKpsK8KmXXcSyynv9jEUk4xedZ3i7PUQoEvfnKrh/C6lMbd9ptsnaLJ2jic1HSZwNRJKmLZFvYy38sdoLUVPIRxXmpeH8TNRyCpEu88jTCIDcLYybJNSaZtlTeSOsXljrFkj5BNOYSi9YsgkgAizCBHkHSNkHSTZos0Ki8rtF5ZkuaLNAj8ox/KMPNFmgRmmY3lGS5os0CE0zGyGT5os0CEEjlDV4d4JtAXmiEaiwLCMUEBmsYBW20PJHywAV5KtY9YOWNkgS/EN1i+JaQ5I2QwJ/iGiGIP8A0SGxigdIqk8hHzdVH0nJaIMesDqzL+0j2izL1InPnMfP1EGkpJ5Nf6Ri5HIfaBcGOL9YXR/OHNRH81f2iMXPaDnHNRBoRynkIOQdB94vTFp1MgY0x0P0jeWOp+xhBuh+8fP7SiPNFmiihkrxXiihT3ivFFAbNGzRRQFmjZo8UBs0WaPFAWaLNFFAWaLNFFAWaLNFFAfNHvFFAV4rxRQHzR80UUBZos0UUBiRGiihQmKKKRSDx88UUB7xGKKAxEEx4pAJMbNGigf/2Q==',
      tags: [
        "history",
        "american",
        "crime"
      ]
    }
  ];
};

export const createComment = async (postContent,photoURL, text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
    userImage:'',
    post: postContent,
    photo: photoURL,
    tags: ['']
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};