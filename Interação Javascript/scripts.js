// Selecionar os elementos
let likeButton = document.querySelector('.postagem .barra .icones .like');
let dislikeButton = document.querySelector('.postagem .barra .icones .like');
let foto = document.querySelector('.postagem .foto');
let commentIcon = document.querySelector('.postagem .barra .icones .comentar');
let commentForm = document.querySelector('.postagem .formulario');
let commentButton = document.querySelector('#btnComentar');
let commentList = document.querySelector('.postagem .comentarios');
let clickCount = 1;
commentForm.style.display = 'none';

// Ações
likeButton.addEventListener('click', function() {
    let likeImage = likeButton.src;
    
    if (likeImage.includes('coracao_red.png')) {
      likeButton.src = 'icones/coracao.png';
    } else {
      likeButton.src = 'icones/coracao_red.png';
    }
  });



foto.addEventListener('dblclick', function() {
    clickCount++;

    if (clickCount == 2) {
        likeButton.src = 'icones/coracao_red.png';

        clickCount = 1;
    }
});


commentForm.style.display = 'none';

commentIcon.addEventListener('click', function() {
    if (commentForm.style.display === 'none') {
        commentForm.style.display = 'flex';
    } else {
        commentForm.style.display = 'none';
    }
});

commentButton.addEventListener('click', function() {
    let commentText = document.querySelector('#txtComentario').value;

    let newComment = document.createElement('div');
    newComment.classList.add('comentario');
    newComment.innerHTML = '<span>Gabi</span><p>' + commentText + '</p>';

    commentList.appendChild(newComment);

    document.querySelector('#txtComentario').value = '';
});

