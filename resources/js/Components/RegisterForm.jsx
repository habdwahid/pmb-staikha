import PropTypes from 'prop-types'
import React from 'react'
import InvalidFeedback from './InvalidFeedback'

function RegisterForm({
  agama,
  errors,
  handleChange,
  handleFileInput,
  handleSubmit,
  informasi,
  jenisKelamin,
  pendidikan,
  processing,
  programStudi,
  progress,
  values,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <h6 className="card-title mb-3">Data Diri</h6>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="mb-2">
            <label htmlFor="nama_lengkap" className="form-label">Nama Lengkap</label>
            <input type="text" name="nama_lengkap" id="nama_lengkap" className={`form-control ${errors.nama_lengkap && 'is-invalid'}`} value={values.nama_lengkap} placeholder="Nama Lengkap" onChange={handleChange} autoCapitalize="sentence" maxLength={128} required />
            <InvalidFeedback message={errors.nama_lengkap} />
          </div>
          <div className="mb-2">
            <label htmlFor="nik" className="form-label">NIK</label>
            <input type="number" name="nik" id="nik" className={`form-control ${errors.nik && 'is-invalid'}`} value={values.nik} onChange={handleChange} placeholder="NIK" required />
            <InvalidFeedback message={errors.nik} />
          </div>
          <div className="mb-2">
            <label htmlFor="tempat_lahir" className="form-label">Tempat Lahir</label>
            <input type="text" name="tempat_lahir" id="tempat_lahir" className={`form-control ${errors.tempat_lahir && 'is-invalid'}`} value={values.tempat_lahir} onChange={handleChange} placeholder="Tempat Lahir" autoCapitalize="sentence" maxLength={64} required />
            <InvalidFeedback message={errors.tempat_lahir} />
          </div>
          <div className="mb-2">
            <label htmlFor="tanggal_lahir" className="form-label">Tanggal Lahir</label>
            <input type="date" name="tanggal_lahir" id="tanggal_lahir" className={`form-control ${errors.tanggal_lahir && 'is-invalid'}`} value={values.tanggal_lahir} onChange={handleChange} required />
            <InvalidFeedback message={errors.tanggal_lahir} />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="mb-2">
            <label htmlFor="jenis_kelamin" className="form-label">Jenis Kelamin</label>
            <select name="jenis_kelamin" id="jenis_kelamin" className={`form-select ${errors.jenis_kelamin && 'is-invalid'}`} value={values.jenis_kelamin} onChange={handleChange} required>
              <option value="">Pilih</option>
              {jenisKelamin?.map((jk) => (
                <option value={jk.id} key={jk.id}>{jk.jenis_kelamin}</option>
              ))}
            </select>
            <InvalidFeedback message={errors.jenis_kelamin} />
          </div>
          <div className="mb-2">
            <label htmlFor="agama" className="form-label">Agama</label>
            <select name="agama" id="agama" className={`form-select ${errors.agama && 'is-invalid'}`} value={values.agama} onChange={handleChange} required>
              <option value="">Pilih</option>
              {agama?.map((ag) => (
                <option value={ag.id} key={ag.id}>{ag.agama}</option>
              ))}
            </select>
            <InvalidFeedback message={errors.agama} />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="alamat" className="form-label">Alamat</label>
          <textarea name="alamat" id="alamat" className={`form-control ${errors.alamat && 'is-invalid'}`} placeholder="Alamat" maxLength={255} value={values.alamat} onChange={handleChange} />
          <InvalidFeedback message={errors.alamat} />
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="mb-2">
            <label htmlFor="desa" className="form-label">Desa/Kelurahan</label>
            <input type="text" name="desa" id="desa" className={`form-control ${errors.desa && 'is-invalid'}`} value={values.desa} placeholder="Desa/Kelurahan" onChange={handleChange} autoCapitalize="sentence" maxLength={64} required />
            <InvalidFeedback message={errors.desa} />
          </div>
          <div className="mb-2">
            <label htmlFor="kecamatan" className="form-label">Kecamatan</label>
            <input type="text" name="kecamatan" id="kecamatan" className={`form-control ${errors.kecamatan && 'is-invalid'}`} value={values.kecamatan} placeholder="Kecamatan" onChange={handleChange} autoCapitalize="sentence" maxLength={64} required />
            <InvalidFeedback message={errors.kecamatan} />
          </div>
          <div className="mb-2">
            <label htmlFor="kabupaten" className="form-label">Kabupaten/Kota</label>
            <input type="text" name="kabupaten" id="kabupaten" className={`form-control ${errors.kabupaten && 'is-invalid'}`} value={values.kabupaten} placeholder="Kabupaten/Kota" onChange={handleChange} autoCapitalize="sentence" maxLength={64} required />
            <InvalidFeedback message={errors.kabupaten} />
          </div>
          <div className="mb-2">
            <label htmlFor="provinsi" className="form-label">Provinsi</label>
            <input type="text" name="provinsi" id="provinsi" className={`form-control ${errors.provinsi && 'is-invalid'}`} value={values.provinsi} placeholder="Provinsi" onChange={handleChange} autoCapitalize="sentence" maxLength={64} required />
            <InvalidFeedback message={errors.provinsi} />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="kode_pos" className="form-label">Kode POS</label>
          <input type="number" name="kode_pos" id="kode_pos" className={`form-control ${errors.kode_pos && 'is-invalid'}`} value={values.kode_pos} placeholder="Kode POS" onChange={handleChange} required />
          <InvalidFeedback message={errors.kode_pos} />
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="mb-2">
            <label htmlFor="asal_sekolah" className="form-label">Asal Sekolah</label>
            <input type="text" name="asal_sekolah" id="asal_sekolah" className={`form-control ${errors.asal_sekolah && 'is-invalid'}`} value={values.asal_sekolah} placeholder="Asal Sekolah" onChange={handleChange} maxLength={128} required />
            <InvalidFeedback message={errors.asal_sekolah} />
          </div>
          <div className="mb-2">
            <label htmlFor="nisn" className="form-label">NISN</label>
            <input type="number" name="nisn" id="nisn" className={`form-control ${errors.nisn && 'is-invalid'}`} value={values.nisn} onChange={handleChange} placeholder="NISN" required />
            <InvalidFeedback message={errors.nisn} />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" id="email" className={`form-control ${errors.email && 'is-invalid'}`} value={values.email} placeholder="Email" onChange={handleChange} maxLength={128} required />
            <InvalidFeedback message={errors.email} />
          </div>
          <div className="mb-2">
            <label htmlFor="phone" className="form-label">No. Handphone/WhatsApp</label>
            <input type="tel" name="phone" id="phone" className={`form-control ${errors.phone && 'is-invalid'}`} value={values.phone} placeholder="08XXX" onChange={handleChange} required />
            <InvalidFeedback message={errors.phone} />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h6 className="card-title mb-3">Data Orang Tua</h6>
        <p className="card-text fw-medium">Ayah</p>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="mb-2">
            <label htmlFor="nama_ayah" className="form-label">Nama Lengkap</label>
            <input type="text" name="nama_ayah" id="nama_ayah" className={`form-control ${errors.nama_ayah && 'is-invalid'}`} value={values.nama_ayah} placeholder="Nama Lengkap" onChange={handleChange} autoCapitalize="sentence" required />
            <InvalidFeedback message={errors.nama_ayah} />
          </div>
          <div className="mb-2">
            <label htmlFor="tempat_lahir_ayah" className="form-label">Tempat Lahir</label>
            <input type="text" name="tempat_lahir_ayah" id="tempat_lahir_ayah" className={`form-control ${errors.tempat_lahir_ayah && 'is-invalid'}`} value={values.tempat_lahir_ayah} placeholder="Tempat Lahir" onChange={handleChange} autoCapitalize="sentence" required />
            <InvalidFeedback message={errors.tempat_lahir_ayah} />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="mb-2">
            <label htmlFor="tanggal_lahir_ayah" className="form-label">Tanggal Lahir</label>
            <input type="date" name="tanggal_lahir_ayah" id="tanggal_lahir_ayah" className={`form-control ${errors.tanggal_lahir_ayah && 'is-invalid'}`} value={values.tanggal_lahir_ayah} onChange={handleChange} required />
            <InvalidFeedback message={errors.tanggal_lahir_ayah} />
          </div>
          <div className="mb-2">
            <label htmlFor="pendidikan_ayah" className="form-label">Pendidikan Terakhir</label>
            <select name="pendidikan_ayah" id="pendidikan_ayah" className={`form-select ${errors.pendidikan_ayah && 'is-invalid'}`} value={values.pendidikan_ayah} onChange={handleChange} required>
              <option value="">Pilih</option>
              {pendidikan?.map((pend) => (
                <option value={pend.id} key={pend.id}>{pend.pendidikan}</option>
              ))}
            </select>
            <InvalidFeedback message={errors.pendidikan_ayah} />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="mb-2">
            <label htmlFor="pekerjaan_ayah" className="form-label">Pekerjaan</label>
            <input type="text" name="pekerjaan_ayah" id="pekerjaan_ayah" className={`form-control ${errors.pekerjaan_ayah && 'is-invalid'}`} value={values.pekerjaan_ayah} onChange={handleChange} placeholder="Pekerjaan" maxLength={64} required />
            <InvalidFeedback message={errors.pekerjaan_ayah} />
          </div>
          <div className="mb-2">
            <label htmlFor="penghasilan_ayah" className="form-label">Penghasilan</label>
            <input type="number" name="penghasilan_ayah" id="penghasilan_ayah" className={`form-control ${errors.penghasilan_ayah && 'is-invalid'}`} value={values.penghasilan_ayah} onChange={handleChange} placeholder="Penghasilan" required />
            <InvalidFeedback message={errors.penghasilan_ayah} />
          </div>
        </div>
        <p className="card-text fw-medium mt-4">Ibu</p>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="mb-2">
            <label htmlFor="nama_ibu" className="form-label">Nama Lengkap</label>
            <input type="text" name="nama_ibu" id="nama_ibu" className={`form-control ${errors.nama_ibu && 'is-invalid'}`} value={values.nama_ibu} placeholder="Nama Lengkap" onChange={handleChange} autoCapitalize="sentence" required />
            <InvalidFeedback message={errors.nama_ibu} />
          </div>
          <div className="mb-2">
            <label htmlFor="tempat_lahir_ibu" className="form-label">Tempat Lahir</label>
            <input type="text" name="tempat_lahir_ibu" id="tempat_lahir_ibu" className={`form-control ${errors.tempat_lahir_ibu && 'is-invalid'}`} value={values.tempat_lahir_ibu} placeholder="Tempat Lahir" onChange={handleChange} autoCapitalize="sentence" required />
            <InvalidFeedback message={errors.tempat_lahir_ibu} />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="mb-2">
            <label htmlFor="tanggal_lahir_ibu" className="form-label">Tanggal Lahir</label>
            <input type="date" name="tanggal_lahir_ibu" id="tanggal_lahir_ibu" className={`form-control ${errors.tanggal_lahir_ibu && 'is-invalid'}`} value={values.tanggal_lahir_ibu} onChange={handleChange} required />
            <InvalidFeedback message={errors.tanggal_lahir_ibu} />
          </div>
          <div className="mb-2">
            <label htmlFor="pendidikan_ibu" className="form-label">Pendidikan Terakhir</label>
            <select name="pendidikan_ibu" id="pendidikan_ibu" className={`form-select ${errors.pendidikan_ibu && 'is-invalid'}`} value={values.pendidikan_ibu} onChange={handleChange} required>
              <option value="">Pilih</option>
              {pendidikan?.map((pend) => (
                <option value={pend.id} key={pend.id}>{pend.pendidikan}</option>
              ))}
            </select>
            <InvalidFeedback message={errors.pendidikan_ibu} />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="mb-2">
            <label htmlFor="pekerjaan_ibu" className="form-label">Pekerjaan</label>
            <input type="text" name="pekerjaan_ibu" id="pekerjaan_ibu" className={`form-control ${errors.pekerjaan_ibu && 'is-invalid'}`} value={values.pekerjaan_ibu} placeholder="Pekerjaan" onChange={handleChange} maxLength={64} required />
            <InvalidFeedback message={errors.pekerjaan_ibu} />
          </div>
          <div className="mb-2">
            <label htmlFor="penghasilan_ibu" className="form-label">Penghasilan</label>
            <input type="number" name="penghasilan_ibu" id="penghasilan_ibu" className={`form-control ${errors.penghasilan_ibu && 'is-invalid'}`} value={values.penghasilan_ibu} onChange={handleChange} placeholder="Penghasilan" required />
            <InvalidFeedback message={errors.penghasilan_ibu} />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="kartu_keluarga" className="form-label">Kartu Keluarga</label>
          <input type="file" name="kartu_keluarga" id="kartu_keluarga" className={`form-control form-control-file ${errors.kartu_keluarga && 'is-invalid'}`} onChange={handleFileInput} accept=".pdf,.jpeg,.jpg" required />
          {progress && (
            <progress value={progress.percentage} max={100}>
              {progress.percentage}
              %
            </progress>
          )}
          {errors.kartu_keluarga ? (
            <InvalidFeedback message={errors.kartu_keluarga} />
          ) : (
            <p className="small text-muted">Ukuran maksimal 1MB (.pdf, .jpeg, .jpg)</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <h6 className="card-title mb-3">Pilihan</h6>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="mb-2">
            <label htmlFor="program_studi" className="form-label">Program Studi</label>
            <select name="program_studi" id="program_studi" className={`form-select ${errors.program_studi && 'is-invalid'}`} value={values.program_studi} onChange={handleChange} required>
              <option value="">Pilih</option>
              {programStudi?.map((studi) => (
                <option
                  value={studi.id}
                  key={studi.id}
                >
                  {studi.program_studi}

                </option>
              ))}
            </select>
            <InvalidFeedback message={errors.program_studi} />
          </div>
          <div className="mb-2">
            <label htmlFor="informasi" className="form-label">Perolehan Informasi</label>
            <select name="informasi" id="informasi" className={`form-select ${errors.informasi && 'is-invalid'}`} value={values.informasi} onChange={handleChange} required>
              <option value="">Pilih</option>
              {informasi?.map((info) => (
                <option value={info.id} key={info.id}>{info.informasi}</option>
              ))}
            </select>
            <InvalidFeedback message={errors.informasi} />
          </div>
        </div>
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-success" disabled={processing}>Daftar</button>
      </div>
    </form>
  )
}

RegisterForm.propTypes = {
  agama: PropTypes.arrayOf(PropTypes.object).isRequired,
  errors: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleFileInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  informasi: PropTypes.arrayOf(PropTypes.object).isRequired,
  jenisKelamin: PropTypes.arrayOf(PropTypes.object).isRequired,
  pendidikan: PropTypes.arrayOf(PropTypes.object).isRequired,
  programStudi: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.object.isRequired,
}

export default RegisterForm
