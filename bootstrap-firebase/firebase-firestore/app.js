//CLOUD CAFE
db.collection('cloud-cafe-6f5c6').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    })
})