// client/src/pages/Gallery.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// MOCK DATA for the gallery images using NEW, SPECIFIC PICSUM IDs for Beach Oceanfront Hotel themes.
// These IDs are selected to generally depict resort/beach/oceanfront scenes.
const GALLERY_SECTIONS = [
    {
        title: "Luxury Accommodations",
        images: [
            // Beachfront hotel room with ocean view
            { id: 1, url: "https://picsum.photos/id/1025/400/300", alt: "Luxury Oceanfront Suite" },
            // Elegant bathroom with natural light, often found in resorts
            { id: 2, url: "https://picsum.photos/id/354/400/300", alt: "Spacious Resort Bathroom" },
            // Private balcony overlooking the ocean
            { id: 3, url: "https://picsum.photos/id/194/400/300", alt: "Private Ocean View Balcony" },
        ]
    },
    {
        title: "Pool & Beachfront",
        images: [
            // Infinity pool overlooking the sea
            { id: 4, url: "https://picsum.photos/id/1019/400/300", alt: "Stunning Infinity Pool by the Sea" },
            // Tropical beach scene
            { id: 5, url: "https://picsum.photos/id/1015/400/300", alt: "Idyllic Tropical Beach" },
            // Sun loungers by a resort pool or beach
            { id: 6, url: "https://picsum.photos/id/157/400/300", alt: "Relaxing Sun Loungers" },
        ]
    },
    {
        title: "Dining & Bar Experience",
        images: [
            // Outdoor dining with ocean background
            { id: 7, url: "https://picsum.photos/id/1043/400/300", alt: "Al Fresco Oceanfront Dining" },
            // A refreshing drink, often seen at a resort bar
            { id: 8, url: "https://picsum.photos/id/1047/400/300", alt: "Tropical Cocktail at the Bar" },
            // Breakfast spread on a sunny patio
            { id: 9, url: "https://picsum.photos/id/1066/400/300", alt: "Gourmet Breakfast with a View" },
        ]
    }
];

const Gallery = () => {
    return (
        <section className="gallery-page py-5">
            
            <div className="container"> 
                <h1 className="display-4 fw-bold text-center text-tropical-dark mb-4">
                    MarcoHotel Photo Gallery
                </h1>
                <p className="lead text-muted text-center mb-5">
                    Explore our tropical paradise—where every picture is a promise. (Click images to enlarge)
                </p>

                {GALLERY_SECTIONS.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-5">
                        <h2 className="text-tropical-primary mb-4 border-bottom pb-2">{section.title}</h2>
                        
                        <div className="row g-4">
                            {section.images.map((img) => (
                                <div key={img.id} className="col-12 col-sm-6 col-lg-4">
                                    <div className="gallery-item rounded overflow-hidden shadow-sm h-100">
                                        <img 
                                            src={img.url} 
                                            alt={img.alt} 
                                            className="img-fluid w-100" 
                                            style={{ height: '250px', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                            
                                            // Bootstrap 5 Lightbox/Modal Trigger 
                                            data-bs-toggle="modal"
                                            data-bs-target={`#galleryModal${img.id}`}
                                        />
                                        <div className="p-2 small text-muted text-start">{img.alt}</div>
                                    </div>
                                    
                                    {/* Lightbox Modal (Appears when image is clicked) */}
                                    <div className="modal fade" id={`galleryModal${img.id}`} tabIndex="-1" aria-hidden="true">
                                        <div className="modal-dialog modal-xl modal-dialog-centered">
                                            <div className="modal-content bg-transparent border-0">
                                                <div className="modal-body p-0 text-center">
                                                    <button type="button" className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    {/* For the modal, we request a larger image size (1200x800) */}
                                                    <img 
                                                        src={img.url.replace('400/300', '1200/800')} 
                                                        alt={img.alt} 
                                                        className="img-fluid rounded shadow-lg" 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Final CTA Feature */}
                <div className="text-center mt-5 pt-5 border-top">
                    <h3 className="mb-3 text-tropical-dark">Ready to See it in Person?</h3>
                    <p className="lead text-muted">Don't just admire the photos—come live the experience!</p>
                    <Link to="/rooms" className="btn btn-warning btn-lg fw-bold mt-2 shadow">
                        Book Your Stay Today
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery;