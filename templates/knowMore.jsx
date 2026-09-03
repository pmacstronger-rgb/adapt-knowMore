import Adapt from 'core/js/adapt';
import React from 'react';
import { html, classes, compile, templates } from 'core/js/reactHelpers';

export default function KnowMore(props) {
 
  return (
    
	<div className="component__inner knowmore__inner">
	
		<div className="smn">
			<div className="smnTitulo">
				<div className="smnTituloIcone">
					<templates.image {...props.headerGraphic}
						classNamePrefixes={['knowmore']}
						attributionClassNamePrefixes={['knowmore']}
					  />
				</div>
				<div className="smnTituloTexto">
					<p>{html(compile(props.headerTitle))}</p>
				</div>
			</div>
			<div className="knowmore__body">{html(compile(props.bodyText))}</div>
			<div className="knowmore__items">
			{props._items.map(({body, _graphic, _link}) =>
			  <div>
			  <a
				href={_link}
				target='_blank'
			  >
				<div className="knowmore__item-inner">
				  <div className="knowmore__item-container">
					{ _graphic.src &&
					  <templates.image {..._graphic}
						classNamePrefixes={['knowmore__item']}
						attributionClassNamePrefixes={['knowmore']}
					  />
					}
					{body &&
					  <div className="knowmore__item-body">
						{html(compile(body))}
					  </div>
					}
				  </div>
				</div>

			  </a>
			  </div>
			)}
			</div>
			<br />
			<br />
		</div>
	
	</div>
  );
}
